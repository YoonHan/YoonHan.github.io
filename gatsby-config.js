module.exports = {
  siteMetadata: {
    siteUrl: "https://yoonhan.github.io",
    title: "Yoon's blog",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'posts',
        path: `${__dirname}/posts`,
      }
    }
  ],
};
