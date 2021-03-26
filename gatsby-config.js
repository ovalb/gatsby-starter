/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Onepage Starter",
    description: "Minimalistic gatsby starter with tailwind css"
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "GA-TRACKING_ID", // Google Analytics / GA
          "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          "DC-FLOODIGHT_ID",  // Marketing Platform advertising products
        ]
      }
    }
  ],
}
