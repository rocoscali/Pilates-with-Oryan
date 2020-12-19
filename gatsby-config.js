const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://www.example.com",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    title: `Pilates With Oryan`,
    titleTemplate: `%s · Pilates With Oryan`,
    description: `Pilates classes in Berlin -
    Classical, Contemporary, Mat & Apparatus. 
    Pilates guides you on how to think and move differently, 
    be more focused, and be more coordinated with your body and mind.`,
    siteUrl: `https://www.pilateswithoryan.com`,
    image: "/oryan-website.jpg",
    author: "Roi Cohen",
    url: `https://www.pilateswithoryan.com`,
    twitterUsername: `@pilateswithoryan`,
    locale: `en_US`,
    canonical: `https://www.pilateswithoryan.com`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Josefin Sans",
              variants: ["400", "400i"],
            },
            {
              family: "Montserrat",
              variants: ["400", "400i"],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.pilateswithoryan.com`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/img/`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
  ],
}
