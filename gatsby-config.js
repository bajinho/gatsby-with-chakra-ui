module.exports = {
  siteMetadata: {
    title: 'Gastby with ChakraUI',
  },
  plugins: [
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },,
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if `false`, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {number} [portalZIndex=40]
         * The z-index to apply to all portal nodes. This is useful
         * if your app uses a lot z-index to position elements.
         */
        portalZIndex: 40,
        /**
         * @property {boolean} [isBaseProvider=false]
         * Setting this to true will render the `ChakraBaseProvider`
         * which only uses theme tokens initially and not default component themes
         */
        isBaseProvider: false,
      },
    },
    'gatsby-plugin-react-helmet',
    // 'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    // 'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
