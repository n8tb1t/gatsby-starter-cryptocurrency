exports.createPages = require('./src/actions/create-pages')
exports.onCreateNode = require('./src/actions/on-create-node')
exports.createResolvers = require('./src/actions/create-resolvers')
exports.onCreatePage = require('./src/actions/on-create-page')

// fix https://github.com/gatsbyjs/gatsby/issues/11934
exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
}