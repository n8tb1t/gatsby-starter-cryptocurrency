const {
  siteMetadata: { name, title, description, siteUrl }
} = require('../config')

export default {
  head: {
    titleTemplate: `${title}: %s`,
    defaultTitle: title,
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: description },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:site_name', content: name },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image', content: `${siteUrl}/default_preview.png` },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '1200' }
    ],
    link: []
  }
}
