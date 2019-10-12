const createDocsPages = require('./create-pages/create-docs-pages')

// const createMarkdownPages = require('./create-pages/create-markdown-pages')
// const createAuthorsPages = require('./create-pages/create-authors-pages')
// const createPostsPagination = require('./pagination/posts-by-date')
// const createCategoriesPagination = require('./pagination/posts-by-categories')
// const createTagsPagination = require('./pagination/posts-by-tags')
// const createAuthorsPagination = require('./pagination/posts-by-authors')

module.exports = async ({ graphql, actions }) => {
  await createDocsPages(graphql, actions)
  // await createMarkdownPages(graphql, actions)
  // await createAuthorsPages(graphql, actions)
  // await createPostsPagination(graphql, actions)
  // await createCategoriesPagination(graphql, actions)
  // await createTagsPagination(graphql, actions)
  // await createAuthorsPagination(graphql, actions)
}
