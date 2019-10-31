const queries = require('./src/actions/algolia-queries')

const { algolia, siteMetadata, disqus, contentPaths } = require('./config')

module.exports = {
  siteMetadata,
  mapping: {
    'MarkdownRemark.frontmatter.author': `AuthorYaml`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-twitter',
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: algolia.appID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000,
        enablePartialUpdates: true
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/${contentPaths.docs}`,
        name: 'docs'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/${contentPaths.blog}`,
        name: 'blog'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/${contentPaths.yaml}`,
        name: 'yaml'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1120
            }
          },
          'gatsby-remark-external-links',
          'gatsby-remark-autolink-headers',
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: false
            }
          },
          'gatsby-remark-copy-linked-files'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteMetadata.name,
        short_name: siteMetadata.name,
        start_url: '/',
        background_color: '#073B4C',
        theme_color: '#073B4C',
        display: 'standalone',
        lang: 'en',
        icon: `src/images/logo.svg`
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: disqus.shortname
      }
    }
  ]
}
