const fs = require('fs')
const GithubSlugger = require('github-slugger')
const createNodeId = require('gatsby/dist/utils/create-node-id')

const dotenv = require('dotenv').config({ path: '.env.gatsby' })

const getPostsQuery = `query getPostsIndex {
  result: allMarkdownRemark(limit: 1000, filter: {fields: {sourceType: {eq: "blog"}}, frontmatter: { draft: { ne: true }}}) {
    edges {
      node {
        frontmatter {
          slug
          date(formatString: "MMM D, YYYY")
        }
        fields {
          objectID
          title
        }
        internal {
          content
          contentDigest
        }
      }
    }
  }
}`

const getDocsQuery = `query getDocsIndex {
  result: allMarkdownRemark(filter: {fields: {sourceType: {eq: "docs"}, slug: {regex: "/current/"}}}) {
    edges {
      node {
        fields {
          slug
        }
        headings {
          value
        }
        internal {
          contentDigest
          content
        }
      }
    }
  }
}`

const createDocPagesFromParagraphs = singlePages =>
  singlePages.map(docPage => {
    const { content, slug, headings } = docPage
    const slugger = new GithubSlugger()

    return content
      .split(/^#{1,2} (.*)$/gm)
      .slice(1)
      .map(pageChapter => pageChapter.trim())
      .map((current, index, initialArray) => {
        if (index === 0 || index % 2 === 0) {
          const parentSlug = slug.replace(/current/, 'docs')
          const pageContent = initialArray[index + 1]
          const chapterSlug = `${parentSlug}#${slugger.slug(initialArray[index])}`

          return {
            objectID: createNodeId(`${chapterSlug}objectID`, 'docs'),
            parentSlug,
            parentTitle: headings[0].value,
            chapterSlug,
            chapterTitle: initialArray[index],
            contentDigest: createNodeId(`${pageContent + chapterSlug}content`, 'docs'),
            pageContent
          }
        }
      })
      .filter(value => typeof value !== 'undefined')
  }).flat()

const flattenPosts = arr =>
  arr.map(({ node: { frontmatter, fields, ...rest } }) => ({
    ...frontmatter,
    ...fields,
    ...rest
  }))

const flattenDocs = arr =>
  arr.map(({ node: { fields, headings, internal } }) => ({
    ...fields,
    ...internal,
    headings
  }))


const queries = [
  {
    query: getPostsQuery,
    transformer: ({ data }) => flattenPosts(data.result.edges),
    indexName: 'catalyst_blog',
    matchFields: ['slug']
  },
  {
    query: getDocsQuery,
    transformer: ({ data }) => createDocPagesFromParagraphs(flattenDocs(data.result.edges)),
    indexName: 'catalyst_docs',
    matchFields: ['contentDigest']
  }
]

module.exports = {
  siteMetadata: {
    title: 'Catalyst Coin',
    siteUrl: process.env.GATSBY_ROOT_URL
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': `AuthorYaml`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true, // default: false
        matchFields: ['slug'] // Array<String> default: ['modified']
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-yaml',
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
        path: `${__dirname}/content/docs`,
        name: 'docs'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/yaml`,
        name: 'yaml'
      }
    },
    'gatsby-plugin-sharp',
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
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-twitter',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Catalyst Coin',
        short_name: 'Catalyst Coin',
        start_url: '/',
        background_color: '#67cece',
        theme_color: '#38a9b4',
        display: 'standalone',
        lang: 'en',
        icons: [
          {
            src: '/android-icon-36x36.png',
            sizes: '36x36',
            type: 'image/png',
            density: '0.75'
          },
          {
            src: '/android-icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
            density: '1.0'
          },
          {
            src: '/android-icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
            density: '1.5'
          },
          {
            src: '/android-icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
            density: '2.0'
          },
          {
            src: '/android-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
            density: '3.0'
          },
          {
            src: '/android-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            density: '4.0'
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `catalyst-coin`
      }
    },
    // 'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
    //   },
    // },
    'gatsby-plugin-remove-serviceworker'
  ]
}
