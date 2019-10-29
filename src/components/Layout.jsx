import React, { useState } from 'react'
import classNames from 'classnames'
import Helmet from 'react-helmet'

import Header from './layout/Header'
import Footer from './layout/Footer'
import SideMenu from './layout/SideMenu'

import BurgerButton from './layout/BurgerButton'

import '../styles/main.scss'

import helmetConfig from '../helmetConfig'

export default ({ children, location }) => {
  const [showMenu, setShowMenu] = useState(false)
  const withSecondMenuDisplayed = location.pathname.search('/docs') !== -1

  return (
    <div
      className={classNames('main full', {
        open: showMenu,
        'with-second-menu-displayed': withSecondMenuDisplayed
      })}
    >
      <div className="full">
        <Helmet {...helmetConfig.head} />
        <Header />
        <div className="page openable">{children}</div>
        <Footer />
      </div>
      <BurgerButton onClick={() => setShowMenu(!showMenu)} status={showMenu ? 'close' : 'burger'} />
      <div role="presentation" className="overlay" onClick={() => setShowMenu(false)} />
      <SideMenu open={showMenu} />
    </div>
  )
}
