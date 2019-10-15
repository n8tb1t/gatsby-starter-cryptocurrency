const yaml = require('js-yaml')
const path = require('path')
const fs = require('fs')

module.exports = yaml.safeLoad(
  fs.readFileSync(path.resolve('./config/config.yaml'), 'utf8')
)
