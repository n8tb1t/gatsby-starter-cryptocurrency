const {
  docs: {current, currentVersion, docsRepo}
} = require('../../config')

const versionHelper = {
  getOriginalVersion(transformedVersion) {
    // noinspection RegExpSingleCharAlternation
    return transformedVersion.replace(/v|\//g, '').replace(current, currentVersion)
  },
  getPrefixedVersion(version) {
    return Number.isNaN(Number(version)) ? version : `v${version}`
  },
  generateSlugPreviousChapter(prefixedVersionSlug, section, chapterPrevious) {
    return chapterPrevious === 'index'
      ? `/docs/${prefixedVersionSlug}${section}/`
      : `/docs/${prefixedVersionSlug}${section}/${chapterPrevious}/`
  },
  generateSlugNextChapter(prefixedVersionSlug, section, chapterNext) {
    return `/docs/${prefixedVersionSlug}${section}/${chapterNext}/`
  },
  generateSlugEditDocumentation(originalVersion, section, article) {
    if (section) {
      return `${docsRepo}${originalVersion}/${section}/${article}.md`
    }

    return `${docsRepo}${originalVersion}/${article}.md`
  }
}

module.exports = versionHelper
