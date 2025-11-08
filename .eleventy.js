module.exports = function (eleventyConfig) {

    const fs = require('fs');
    const path = require('path');
    // Shared rewrite helper to normalize src/href paths in HTML content.
    // Converts occurrences like:
    //   src="/src/...    -> src="/...    (strip leading /src/)
    //   src="../...      -> src="/...    (collapse parent-relative paths to root)
    // Works for href as well.
    function rewriteSrcHref(content) {
        if (typeof content !== 'string') return content;
        return content
            .replace(/(src|href)="\/(src)\//g, '$1="/')
            .replace(/(src|href)="(?:\.\.\/)+/g, '$1="/');
    }
    // detect production vs development so we can show drafts in dev
    const isProduction = process.env.ELEVENTY_ENV === 'production' || process.env.NODE_ENV === 'production' || !!process.env.GITHUB_ACTIONS;
    // In production we will prevent unpublished posts from being written by
    // setting their `permalink` to false via global computed data. In
    // development we leave permalinks alone so drafts are visible locally.

    // Allow Eleventy to process header.html so Nunjucks templating is executed.
    eleventyConfig.addPassthroughCopy({ "src/_includes/footer.html": "/footer.html" });
    eleventyConfig.addPassthroughCopy("src/assets/images");
    // Copy the generated Tailwind CSS file into the site root as style.css
    eleventyConfig.addPassthroughCopy({ "src/assets/styles/tailwind.css": "/style.css" });

    // This creates a "collection" of all files in the "posts" folder
    eleventyConfig.addCollection("posts", function (collectionApi) {
        // Only exclude unpublished posts when running a production build. In development
        // we want to see drafted posts locally (so npm run dev shows everything).
        // NOTE: unpublishedUrls is still collected so the afterBuild hook can remove
        // outputs when running in production.
        const all = collectionApi.getFilteredByGlob("src/posts/*.md");

        // Track unpublished posts for potential use, but do not remove files
        // here — permalink handling will prevent generation in production.

        // If we're in production builds, filter out drafts/unpublished posts so they
        // don't show on the public site. During development return everything so
        // you can preview drafts locally with `npm run dev`.
        const published = isProduction ? all.filter(item => {
            const data = item.data || {};
            if (data.draft === true) return false;
            if (data.published === false) return false;
            return true;
        }) : all;

        return published.sort(function (a, b) {
            // Sort by date, newest first. Be defensive: convert to timestamps and fallback when missing.
            const aDate = a && a.data && a.data.date ? new Date(a.data.date).getTime() : 0;
            const bDate = b && b.data && b.data.date ? new Date(b.data.date).getTime() : 0;

            if (bDate === aDate) {
                // If dates are equal, sort by inputPath so order is deterministic
                if (a.inputPath && b.inputPath) return b.inputPath.localeCompare(a.inputPath);
                return 0;
            }

            return bDate - aDate;
        });
    });

    // We'll use a global `eleventyComputed` data file to control permalinks for
    // unpublished posts in production so they're not written at all. See
    // src/_data/eleventyComputed.js for the implementation.

    // Create a collection for pages
    eleventyConfig.addCollection("pages", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/_pages/**/*.{html,md}");
    });

    eleventyConfig.addFilter("postDate", (dateObj) => {
        // Formats the date to be like "January 1, 2025"
        return new Date(dateObj).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC'
        });
    });

    // Add a custom filter for formatting dates in 12-hour time without timezone
    eleventyConfig.addFilter("prettyDate", (dateObj) => {
        return new Date(dateObj).toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    });

    eleventyConfig.addTransform("fix-src-links", function (content, outputPath) {
        // Only run this transform on HTML files
        if (outputPath && outputPath.endsWith(".html")) {

            // Replace occurrences like src="/src/... -> src="/... and
            // src="../images/... -> src="/images/... (same for href).
            // - First replace any leading "/src/" that came from in-repo paths.
            // - Then replace any number of "../" segments with a leading "/".
            let newContent = rewriteSrcHref(content);

            return newContent;
        }

        // Return the content unchanged for other file types
        return content;
    });
    
    // During local development, make the dev server serve the generated
    // `404.html` for any unknown path (so client-side navigation and direct
    // unknown URLs show the same 404 page as production). This uses
    // BrowserSync middleware and only activates when not in production.
    if (!isProduction) {
        eleventyConfig.setBrowserSyncConfig({
            callbacks: {
                ready: function (err, bs) {
                    bs.addMiddleware('*', function (req, res) {
                        // Serve files from the generated _site, but rewrite HTML
                        // responses to normalize src/href paths (same rules as our
                        // build transform). If the requested file doesn't exist,
                        // return the generated 404.html if present.
                        try {
                            // Normalize request URL and strip querystring
                            const reqUrl = req.url.split('?')[0];
                            let targetPath = path.join(process.cwd(), '_site', reqUrl);

                            // If the request is a directory (ends with /) serve index.html
                            if (reqUrl.endsWith('/')) {
                                targetPath = path.join(process.cwd(), '_site', reqUrl, 'index.html');
                            } else {
                                // If there's no extension, try adding .html
                                if (!path.extname(targetPath)) {
                                    const tryHtml = targetPath + '.html';
                                    if (fs.existsSync(tryHtml)) targetPath = tryHtml;
                                }
                            }

                            if (fs.existsSync(targetPath) && fs.statSync(targetPath).isFile()) {
                                const ext = path.extname(targetPath).toLowerCase();
                                if (ext === '.html') {
                                    let content = fs.readFileSync(targetPath, 'utf8');
                                    // Apply same rewrites as the build transform
                                    content = rewriteSrcHref(content);

                                    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                                    res.end(content);
                                    return;
                                }

                                // Non-HTML: stream file directly
                                const stream = fs.createReadStream(targetPath);
                                res.writeHead(200);
                                stream.pipe(res);
                                return;
                            }

                            // File missing: serve 404.html if available
                            const content404 = fs.readFileSync(path.join(process.cwd(), '_site', '404.html'), 'utf8');
                            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                            res.end(content404);
                        } catch (e) {
                            // If 404.html isn't present yet or another error occurrs,
                            // fallback to a plain 404 text response.
                            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
                            res.end('404 Not Found');
                        }
                    });
                }
            }
        });
    }
    // 👆 END OF NEW BLOCK 👆

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes"
        },
        htmlTemplateEngine: "njk",
        templateFormats: ["html", "njk", "md"],
        markdownTemplateEngine: "njk"
    };
};