const HTML5Outline = require('h5o')
const { JSDOM } = require('jsdom')
const fileContentHelper = require('./fileContentHelper')
const treeHelper = require('./treeHelper')

function getHTML5Outline(filepath, id) {
  const fileContent = fileContentHelper.getFileContent(filepath, id)
  return HTML5Outline(new JSDOM(fileContent).window.document.body)
}

function processFile(filepath, id) {
  const outline = getHTML5Outline(filepath, id)
  return treeHelper.getTree(outline, id, [])
}

module.exports.processFile = processFile
