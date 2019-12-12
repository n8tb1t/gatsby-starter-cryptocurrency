module.exports = {
  siteMetadata: {
    name: 'Catalyst Coin',
    title: 'Catalyst Coin',
    description: 'An All-in-One solution for Modern Transactions',
    siteUrl: 'https://www.cryptocatalyst.net',
    twitter: 'catalyst_CX'
  },

  blog: {
    blogPagesDirectory: `${__dirname}/content/blog/`
  },
  docs: {
    current: 'current',
    versions: ['master'],
    currentVersion: '0.4',
    masterVersion: '0.5',
    docsRepo:'https://github.com/cx-catalyst/catalyst-docs/edit/',
    docPagesDirectory: `${__dirname}/content/docs/`
  },

  projectGithub: {
    user: 'catalystdevelopment',
    repo: 'catalyst-cli'
  },

  disqus: {
    shortname: 'catalyst-coin'
  },

  algolia: {
    appID: 'DCWT36AMWS',
    apiKey: '000000000000000000000000000000'
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
