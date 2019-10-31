const createDocsPages = require('./create-pages/create-docs-pages')
const createBlogPages = require('./create-pages/create-blog-pages')

module.exports = async ({ graphql, actions }) => {
  await createDocsPages(graphql, actions)
  await createBlogPages(graphql, actions)

}
