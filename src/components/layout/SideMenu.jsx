import React from 'react'
import classNames from 'classnames'
import links from '../../data/menu'
import Search from '../search'
import MenuItem from './MenuItem'

const blogQueryConfig = {
  hitsPerPage: 3,
  attributesToRetrieve: ['slug'],
  attributesToHighlight: ['title', 'date'],
  attributesToSnippet: ['internal.content:10'],
  restrictHighlightAndSnippetArrays: true
}

const docsQueryConfig = {
  hitsPerPage: 3,
  attributesToRetrieve: ['parentSlug', 'chapterSlug'],
  attributesToHighlight: ['parentTitle', 'chapterTitle'],
  attributesToSnippet: ['pageContent:15'],
  restrictHighlightAndSnippetArrays: true
}

const searchIndices = [
  { name: `catalyst_blog`, title: `Blog Posts`, hitComp: `PostHit`, config: blogQueryConfig },
  { name: `catalyst_docs`, title: `Documentation`, hitComp: `DocsHit`, config: docsQueryConfig }
]

const nav = links.map(link => <MenuItem key={link.text} {...link} />)

export default ({ open = false }) => (
  <div className={classNames('side-menu', { open })}>
    <div className="side-menu__top">
      <div className="side-menu__logo">
        <div className="logo__circle">
          <img className="logo__cx" src={`/logo.svg`} width="555" height="321" alt="logo" />
        </div>
        <div className="logo__text">Catalyst Network</div>
      </div>
      <Search className="side-menu__search" indices={searchIndices} />
    </div>
    <nav className="side-menu__nav">
      <MenuItem key="home" path="/" text="Home" />
      {nav}
      <div className="menu-item menu-item__social">
        <a href="https://twitter.com/catalyst_CX" target="blank">
          <i className="icon-twitter" />
        </a>
        <a href="https://github.com/catalystdevelopment" target="blank">
          <i className="icon-github" />
        </a>
        <a href="https://discord.gg/Wf8hsBU" target="blank">
          <i className="icon-discord" />
        </a>
      </div>
    </nav>
  </div>
)