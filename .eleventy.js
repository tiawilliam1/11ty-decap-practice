module.exports = function (eleventyConfig) {
  // Copy static folders to output
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/uploads": "uploads" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // ✅ Always treat files in src/posts as the posts collection
  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/posts/*.md");
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
};