module.exports = {
  siteMetadata: {
    name: 'Catalyst Coin',
    title: 'Catalyst Coin',
    description: 'An All-in-One solution for Modern Transactions',
    siteUrl: 'https://www.cryptocatalyst.net',
    twitter: 'catalyst_CX'
  },

  docs: {
    current: 'current',
    versions: ['master'],
    currentVersion: '0.4',
    masterVersion: '0.5',
    docsRepo:'https://github.com/cx-catalyst/catalyst-docs/edit/'
  },

  projectGithub: {
    user: 'catalystdevelopment',
    repo: 'catalyst'
  },

  disqus: {
    shortname: 'catalyst-coin'
  },

  algolia: {
    appID: 'DCWT36AMWS',
    apiKey: 'df50da353da7d8f17f4321fb0f2d6609'
  },

  contentPaths: {
    docs: 'content/docs',
    blog: 'content/blog',
    yaml: 'content/yaml'
  },

  slugs: {
    tagPrefix: '/blog/tag',
    categoryPrefix: '/blog/category',
    authorPrefix: '/blog/author'
  }
}
