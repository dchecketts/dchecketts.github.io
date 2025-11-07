module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy({ "src/_includes/header.html": "/header.html" });
    eleventyConfig.addPassthroughCopy({ "src/_includes/footer.html": "/footer.html" });

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

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes"
        },
        htmlTemplateEngine: "njk"
    };
  };