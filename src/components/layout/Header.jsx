import React, { useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import { Link } from 'gatsby'

import links from '../../data/menu'
import MenuItem from './MenuItem'
import Search from '../search'

const nav = links.map(link => <MenuItem key={link.text} {...link} />)

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

const Header = ({path}) => {
  const [headerStyle, setHeaderStyle] = useState({
    transition: 'all 200ms ease-in'
  })

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isVisible = currPos.y > prevPos.y

      const shouldBeStyle = {
        visibility: isVisible ? 'visible' : 'hidden',
        transition: `all 200ms ${isVisible ? 'ease-in' : 'ease-out'}`,
        transform: isVisible ? 'none' : 'translate(0, -100%)'
      }

      if (shouldBeStyle.transition === headerStyle.transition) return

      if (!path.includes('/docs')) setHeaderStyle(shouldBeStyle)
    },
    [headerStyle]
  )

  return (
    <header style={{ ...headerStyle }} className="header openable">
      <Link to="/" className="header__logo">
        <img className="logo__cx" src={`/logo.svg`} alt="Catalyst Logo" width="0" height="0" />
        <span className="catalyst_network">Catalyst Network</span>
      </Link>
      <Search className="header__search" indices={searchIndices} />
      <nav className="header__nav">{nav}</nav>
      <nav className="header__social">
        <a href="https://twitter.com/catalyst_CX" target="blank">
          <i className="icon-twitter" />
        </a>
        <a href="https://github.com/catalystdevelopment" target="blank">
          <i className="icon-github" />
        </a>
        <a href="https://discord.gg/Wf8hsBU" target="blank">
          <i className="icon-discord" />
        </a>
      </nav>
    </header>
  )
}

export default Header
