import React from 'react'
import { Link } from 'gatsby'

import classNames from 'classnames'

// eslint-disable-next-line import/no-extraneous-dependencies
import { Location } from '@reach/router'

const isExternal = link => RegExp('^http(s|)://').test(link)

const MenuItemLink = ({ path = null, children = null, className = 'menu-item__link' }) =>
  isExternal(path) ? (
    <a className={className} href={path} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <Link className={className} to={path}>
      {children}
    </Link>
  )

export default ({ text, path = null, submenu = null, clickable = true }) => (
  <Location>
    {({ location }) => {
      let current = RegExp(`^${path}`).test(location.pathname)

      if (submenu && !path.includes('docs')) {
        current = submenu.filter(menuItem => menuItem.path === location.pathname).length
      }

      return (
        <div
          className={classNames('menu-item', {
            withSubmenu: submenu,
            current
          })}
        >
          <MenuItemLink path={path}>
            <span>{text}</span>
            {submenu && <i className="icon-chevron-circle-down" />}
          </MenuItemLink>
          {submenu && (
            <div className="menu-item__submenu">
              {submenu.map(({ text: itemText, path: itemPath }) => (
                <MenuItemLink key={itemText} path={itemPath} className="submenu__item">
                  {itemText}
                </MenuItemLink>
              ))}
            </div>
          )}
        </div>
      )
    }}
  </Location>
)

