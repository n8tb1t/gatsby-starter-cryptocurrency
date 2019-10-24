const fs = require('fs')
const { markdown } = require('markdown')
const path = require('path')

const fileContentHelper = {
  getFileContent(filePath, id, plain = false) {
    let content = fs
      .readFileSync(path.resolve(path.join(filePath, `${id}.md`)))
      .toString()
      .replace(/([^`])(`)([^`])/gm, '$1$3')
      .replace(/```(|yaml|xml|php|json|javascript|sh)[^`]*```/gm, '')

    if (plain) {
      content = content.replace(/<!--(.*)-->(\n)/gm, '').
      replace(/#### Expected Output:/gm, '')
    }
    return plain ? content : markdown.toHTML(content)
  }
}

module.exports = fileContentHelper
