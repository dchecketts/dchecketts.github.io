const isProduction = process.env.ELEVENTY_ENV === 'production' || process.env.NODE_ENV === 'production' || !!process.env.GITHUB_ACTIONS;

// Computed permalink applied to every template's data. If it returns `false`
// for a page, Eleventy will not write an output file for it.
module.exports = {
    permalink: (data) => {
        // Don't change behavior during development — allow drafts to be written
        if (!isProduction) return data.permalink;

        const inputPath = data && data.page && data.page.inputPath ? String(data.page.inputPath) : '';
        // Match both POSIX and Windows paths (src/posts/ or src\posts\)
        const postsPathRegex = /src[\\/]+posts[\\/]+/i;
        if (!postsPathRegex.test(inputPath)) return data.permalink;

        const draft = data && (data.draft === true || data.published === false);
        return draft ? false : data.permalink;
    }
};
