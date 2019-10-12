

const path = require('path');
const URL = require('url');
const { createFilePath } = require(`gatsby-source-filesystem`);

const { current, versions } = require('./constants');

exports.createPages = require('./src/actions/create-pages')
// exports.onCreateNode = require('./src/actions/on-create-node')
exports.createResolvers = require('./src/actions/create-resolvers')
exports.onCreatePage = require('./src/actions/on-create-page')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {

    const parentNode = getNode(node.parent)
    createNodeField({ node, name: `sourceType`, value: parentNode.sourceInstanceName })

    const fileNode = getNode(node.parent);
    let nodePath = fileNode.relativePath.replace('.md', '');
    let html = node.internal.content;
    const localUrls = [];
    let matches;
    const regex = /(\]\((?!http)(?!#)(.*?)\))/gi;

    while ((matches = regex.exec(html))) {
      localUrls.push(matches[2]);
    }

    localUrls.map(url => {
      let newUrl = url.replace(/(\/index)?\.md/, '/');
      newUrl = `/${URL.resolve(nodePath, newUrl)}`;
      newUrl = newUrl.replace(`/${current}/`, '/');
      html = html.replace(url, newUrl);
      return true;
    });

    node.internal.content = html;

    const slug = createFilePath({ node, getNode, basePath: `pages` });

    if ('index' === path.basename(nodePath)) {
      createNodeField({
        node,
        name: 'redirect',
        value: `/${nodePath}`,
      });
    }

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
