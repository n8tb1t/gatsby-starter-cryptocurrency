module.exports = ({ getConfig, stage, actions }) => {
  const config = getConfig()

  // Disable sourcemaps
  if (stage === `build-javascript`) {
    actions.setWebpackConfig({
      devtool: false
    })
  }

  // fix https://github.com/gatsbyjs/gatsby/issues/11934
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
}
