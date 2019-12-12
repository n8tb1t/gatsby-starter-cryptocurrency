<p align="center">
  <a href="https://www.cryptocatalyst.net/">
    <img alt="Catalyst Network" width=150 src="/static/logo.svg" />
  </a>
</p>
<h1 align="center">
  Gatsby Starter Cryptocurrency.
</h1>

<p align="center">
  <a href="https://github.com/n8tb1t/catalyst-website/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="This GatsbyJS starter is released under the MIT license." />
  </a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  <a href="https://twitter.com/intent/follow?screen_name=n8tb1t">
    <img src="https://img.shields.io/twitter/follow/n8tb1t.svg?label=Follow%20@n8tb1t" alt="Follow @n8tb1t" />
  </a>
</p>

A Full-fledged cryptocurrency portal with a landing page, blog, roadmap, devs team, and docs sections.

## ✨ Features

- Beautiful Mobile-first design.
- modular SCSS styles.
- Configurable color scheme.
- Advanced config options.
- Advanced landing page.
- Blog Component.
- Live comments.
- Roadmap component.
- Developers page component.
- Algolia advanced search index, with content chunks.
- Docs component.
- No outdated codebase, use only react hooks.
- Easy to modify react components.
- SEO (Sitemap, OpenGraph tags, Twitter tags)
- Google Analytics Support
- Offline Support & WebApp Manifest
- Easy to modify assets.

## 🚀 Quick start

1.  **Create a Gatsby site.**

- `gatsby new project-name https://github.com/n8tb1t/gatsby-starter-cryptocurrency.git`
- `cd project-name`

Or:

1. **Manual install**

- `git clone https://github.com/n8tb1t/gatsby-starter-cryptocurrency.git`
- `cd gatsby-starter-cryptocurrency`
- `yarn install`

## Install demo content(required).

- **Windows:** `sh .\bin\retrieve-documentation`
- **Linux:** `sh ./bin/retrieve-documentation`

## Start.

- `gatsby develop`


## Configuration.

```js
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
    apiKey: 'df50da353da7d8f17f4321fb0f2d0000'
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
```

