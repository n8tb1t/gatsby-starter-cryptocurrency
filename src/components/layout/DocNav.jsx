import React, { useState, useEffect } from 'react'

import NavItem from '../docs/NavItem'
import { getPrefixedVersion } from '../../lib/versionHelper'

const {
  docs: { versions }
} = require('../../../config')

export default ({ location, nav, version }) => {
  const getItemByLocation = location => {
    const eitherVersions = versions.map(getPrefixedVersion).join('|')
    const reg = new RegExp(`docs/(((${eitherVersions})/)?.*?)(/|$)`)
    const matches = location.pathname.match(reg)
    return matches ? matches[1] : null
  }

  const [currentItem, setCurrentItem] = useState(getItemByLocation(location))

  useEffect(()=>{
    const handleScroll = () => {
      if (document.querySelectorAll('.Collapsible.submenu__item.open')[0] === undefined) {
        return
      }

      const currentItemOpen = document.querySelectorAll('.Collapsible.submenu__item.open')[0]
      const childsCurrentItem = currentItemOpen.querySelectorAll('a')
      const childsInnerPageItem = []

      childsCurrentItem.forEach((child, index) => {

        childsInnerPageItem[index] = document.getElementById(child.getAttribute('href').split('#')[1])
        child.parentElement.classList.remove('current')
      })

      for (let i = childsCurrentItem.length; i > 0; i -= 1) {
        if (
          childsInnerPageItem[i] &&
          childsInnerPageItem[i].offsetTop < window.scrollY + 2 &&
          childsInnerPageItem[i].parentNode.offsetTop < window.scrollY + 2
        ) {
          childsCurrentItem[i].parentNode.classList.add('current')
          return
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll',handleScroll )

  })



  const items = nav.map(item => (
    <NavItem
      item={item}
      key={item.path}
      current={currentItem}
      location={location}
      version={version}
      onClick={setCurrentItem}
    />
  ))

  return <div className="docs__menu openable">{items}</div>
}
