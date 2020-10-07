const isProd = process.env.NODE_ENV === "production"

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: !isProd,
        ssr: true,
      },
    },
  ],
}
