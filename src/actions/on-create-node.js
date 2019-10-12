// const { createFilePath } = require('gatsby-source-filesystem')
// const { kebabCase } = require('lodash')

// const {
//   slugs: { tagPrefix, categoryPrefix, authorPrefix },
// } = require('../utils/config-loader')

// module.exports = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if ([`AuthorYaml`].includes(node.internal.type)) {
//     const AuthorSlug = node.id.split(' ').length > 1 ? kebabCase(node.id) : node.id

//     const slug = node.slug || `${authorPrefix}/${AuthorSlug}/`
//     createNodeField({ node, name: `slug`, value: slug })
//   }

//   if (![`Mdx`].includes(node.internal.type)) return

//   const parentNode = getNode(node.parent)

//   createNodeField({ node, name: `sourceType`, value: parentNode.sourceInstanceName })

//   const slug = node.frontmatter.slug || createFilePath({ node, getNode })
//   createNodeField({ node, name: `slug`, value: slug })

//   if (node.frontmatter.tags) {
//     const tagSlugs = node.frontmatter.tags.map(tag => `${tagPrefix}/${kebabCase(tag)}/`)
//     createNodeField({ node, name: 'tagSlugs', value: tagSlugs })
//   }

//   if (node.frontmatter.category) {
//     const categorySlug = `${categoryPrefix}/${kebabCase(node.frontmatter.category)}/`
//     createNodeField({ node, name: 'categorySlug', value: categorySlug })
//   }
// }
