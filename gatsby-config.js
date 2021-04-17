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
    description: `Oryan Werthaim is a Pilates instructor in Berlin, offers 
    Classical, Contemporary, Mat & Apparatus classes. 
    Pilates is suitable for any purpose – fitness, better posture, athlete's performance improvement, 
    injury rehabilitation, and most important to help us feel great.
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pilates With Oryan`,
        short_name: `Pilateswithoryan`,
        start_url: `/`,
        background_color: `#fcf9f4`,
        theme_color: `#8db596`,
        display: `minimal-ui`,
        icon: `src/assets/img/oryan-website.jpg`, // This path is relative to the root of the site.
        include_favicon: false,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -60,
      },
    },
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
