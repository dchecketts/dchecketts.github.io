module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy({ "src/_includes/header.html": "/header.html" });
    eleventyConfig.addPassthroughCopy({ "src/_includes/footer.html": "/footer.html" });
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy({ "src/styles/tailwind.css": "/style.css" });

    // This creates a "collection" of all files in the "posts" folder
    eleventyConfig.addCollection("posts", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/posts/*.md").sort(function (a, b) {
            // Sort by date, newest first
            return b.data.date - a.data.date;
        });
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

    eleventyConfig.addTransform("fix-src-links", function (content, outputPath) {
        // Only run this transform on HTML files
        if (outputPath && outputPath.endsWith(".html")) {

            // Find all instances of src="/src/ and href="/src/
            // and replace them with just src="/ and href="/
            let newContent = content.replace(/(src|href)="\/(src)\//g, '$1="/');

            return newContent;
        }

        // Return the content unchanged for other file types
        return content;
    });
    // 👆 END OF NEW BLOCK 👆

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes"
        },
        htmlTemplateEngine: "njk"
    };
};