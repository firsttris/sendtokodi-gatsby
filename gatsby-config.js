const path = require(`path`);

module.exports = {
  pathPrefix: '/sendtokodi-gatsby',
  siteMetadata: {
    title: 'sendtokodi',
    siteUrl: `https://firsttris.github.io/sendtokodi-gatsby`
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`)
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SendToKodi`,
        short_name: `SendToKodi`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/assets/images/SendToKodi/logo.jpg`,
        icons: [
          {
            src: 'favicons/icon-48x48.png',
            sizes: '48x48',
            type: 'image/png'
          },
          {
            src: 'favicons/icon-72x72.png',
            sizes: '72x72',
            type: 'image/png'
          },
          {
            src: 'favicons/icon-96x96.png',
            sizes: '96x96',
            type: 'image/png'
          },
          {
            src: 'favicons/icon-144x144.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: 'favicons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'favicons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'favicons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'favicons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `markdown-pages`),
        name: `markdown-pages`
      }
    },
    `gatsby-transformer-remark`
  ]
};
