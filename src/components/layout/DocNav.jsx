import React, { Component } from 'react'

import NavItem from '../docs/NavItem'
import { getPrefixedVersion } from '../../lib/versionHelper'

const {
  docs: { versions }
} = require('../../../config')

class DocNav extends Component {
  componentWillMount() {
    const { location } = this.props
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.handleScroll)
      window.addEventListener('click', this.handleScroll)
    }
    this.setState(prevState => ({
      ...prevState,
      currentItem: this.getItemByLocation(location)
    }))
  }

  updateLocation = args => {
    this.setState(prevState => ({
      ...prevState,
      locationWithHash: { ...args }
    }))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      const { location } = nextProps
      this.setState(prevState => ({
        ...prevState,
        currentItem: this.getItemByLocation(location)
      }))
    }
  }

  handleScroll() {
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

  getItemByLocation = location => {
    const eitherVersions = versions.map(getPrefixedVersion).join('|')
    const reg = new RegExp(`docs/(((${eitherVersions})/)?.*?)(/|$)`)
    const matches = location.pathname.match(reg)
    return matches ? matches[1] : null
  }

  state = {
    currentItem: null
  }

  toggleMenu = itemPath =>
    this.setState(prevState => ({
      ...prevState,
      currentItem: prevState.currentItem === itemPath ? null : itemPath
    }))

  render() {
    const { currentItem } = this.state
    return (
      <div className="docs__menu openable">
        {this.props.nav.map(item => (
          <NavItem
            item={item}
            key={item.path}
            onClick={this.toggleMenu}
            current={currentItem}
            location={this.props.location}
            version={this.props.version}
          />
        ))}
      </div>
    )
  }
}



DocNav.defaultProps = {
  nav: [],
  version: ''
}

export default DocNav
