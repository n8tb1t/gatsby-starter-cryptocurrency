// eslint-disable-next-line import/no-extraneous-dependencies
const GithubSlugger = require('github-slugger')
const createNodeId = require('gatsby/dist/utils/create-node-id')

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
  singlePages
    .map(docPage => {
      const { content, slug, headings } = docPage
      const slugger = new GithubSlugger()

      return (
        content
          .split(/^#{1,2} (.*)$/gm)
          .slice(1)
          .map(pageChapter => pageChapter.trim())
          // eslint-disable-next-line array-callback-return,consistent-return
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
      )
    })
    .flat()

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

module.exports = [
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
