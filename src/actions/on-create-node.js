const path = require('path')
const URL = require('url')

const { createFilePath } = require(`gatsby-source-filesystem`)
const { kebabCase } = require('lodash')

const { current } = require('../../constants')

const {
  slugs: { tagPrefix, categoryPrefix, authorPrefix }
} = require('../lib/configLoader')

module.exports = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if ([`AuthorYaml`].includes(node.internal.type)) {
    const AuthorSlug = node.id.split(' ').length > 1 ? kebabCase(node.id) : node.id

    const slug = node.slug || `${authorPrefix}/${AuthorSlug}/`
    createNodeField({ node, name: `slug`, value: slug })
  }

  if (node.internal.type !== 'MarkdownRemark') return

  const parentNode = getNode(node.parent)

  createNodeField({ node, name: `sourceType`, value: parentNode.sourceInstanceName })

  if (parentNode.sourceInstanceName === 'docs') {
    const nodePath = parentNode.relativePath.replace('.md', '')
    let html = node.internal.content

    // noinspection JSMismatchedCollectionQueryUpdate
    const localUrls = []
    let matches
    const regex = /(]\((?!http)(?!#)(.*?)\))/gi

    while ((matches = regex.exec(html))) {
      localUrls.push(matches[2])
    }

    localUrls.map(url => {
      let newUrl = url.replace(/(\/index)?\.md/, '/')
      newUrl = `/${URL.resolve(nodePath, newUrl)}`
      newUrl = newUrl.replace(`/${current}/`, '/')
      html = html.replace(url, newUrl)
      return true
    })

    node.internal.content = html

    const slug = createFilePath({ node, getNode, basePath: `pages` })

    if (path.basename(nodePath) === 'index') {
      createNodeField({ node, name: 'redirect', value: `/${nodePath}` })
    }

    createNodeField({ node, name: `slug`, value: slug })
  }

  if (parentNode.sourceInstanceName === 'blog') {
    const slug = node.frontmatter.slug || createFilePath({ node, getNode })
    createNodeField({ node, name: `slug`, value: slug })

    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map(tag => `${tagPrefix}/${kebabCase(tag)}/`)
      createNodeField({ node, name: 'tagSlugs', value: tagSlugs })
    }

    // noinspection JSUnresolvedVariable
    if (node.frontmatter.category) {
      const categorySlug = `${categoryPrefix}/${kebabCase(node.frontmatter.category)}/`
      createNodeField({ node, name: 'categorySlug', value: categorySlug })
    }
  }
}
