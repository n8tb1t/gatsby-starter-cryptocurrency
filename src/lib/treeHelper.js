const GithubSlugger = require('github-slugger')

const treeHelper = {
  getTree(node, id, tree, headings=[], slugger = new GithubSlugger()) {
    if (!node.sections || !tree) return tree

    return [
      ...tree,
      ...node.sections.map(section => {

        const sluggedID = section.heading.tagName === 'H1' ? id : slugger.slug(section.heading.textContent)

        // const uniqueIDElement = headings.filter(element => element.id === sluggedID)
        // const isUnique = uniqueIDElement.length === 0
        //
        // if (!isUnique) {
        //   headings[headings.findIndex((obj => obj.id === sluggedID))].index = uniqueIDElement[0].index + 1
        // }

        const toPush = {
          id:sluggedID,
          title: section.heading.textContent
        }

        // isUnique && headings.push({id:sluggedID, index:0})

        const innerTree = treeHelper.getTree(section, undefined, [], headings, slugger)
        if (innerTree.length) {
          toPush.anchors = innerTree
        }

        return toPush
      })
    ]
  }
}

module.exports = treeHelper
