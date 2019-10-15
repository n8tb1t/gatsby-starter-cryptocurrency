const path = require('path')
const { shuffle } = require('lodash')

module.exports = async (graphql, actions) => {
  const { createPage } = actions

  const context = {
    draft: true,
  }

  const allBlogPages = await graphql(`
    query getAllPosts($draft: Boolean = true) {
      result: allMarkdownRemark(
        sort: {order: DESC, fields: [frontmatter___date, frontmatter___slug]}, 
        filter: {frontmatter: {draft: {ne: $draft}}, fields: {sourceType: {eq: "blog"}}}
      ) 
      {
        edges {
          node {
            fields {
              slug
              sourceType
            }
            frontmatter {
              title
              template
              category
            }
          }
        }
      }
    }`, context)

  if (allBlogPages.errors) { throw allBlogPages.errors }

  const posts = allBlogPages.data.result.edges

  const createNewPage = (context, template) => {
    createPage({
      path: context.slug,
      component: path.resolve(`./src/templates/${template}-template.jsx`),
      context,
    })
  }

  posts.forEach((post, index) => {
    const { fields: { slug }, frontmatter: { template, category } } = post.node

    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    // Filter some posts from the same category
    const worthToRead = shuffle(posts.filter(post => post.node.frontmatter.category === category
      && post.node.fields.slug !== slug))
      .slice(0, 3)

    const context = { slug, previous, next, worthToRead }

    createNewPage(context, template)
  })
}