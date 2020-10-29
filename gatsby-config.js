module.exports = {
  siteMetadata: {
    title: `Pilates With Oryan`,
    siteUrl: `https://www.pilateswithoryan.com`,
    author: "Roi Cohen",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/img/`,
      },
    },
    `gatsby-plugin-sass`,
  ],
}
