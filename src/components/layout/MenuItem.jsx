import React from 'react'
import { Link } from 'gatsby'

import classNames from 'classnames'

// eslint-disable-next-line import/no-extraneous-dependencies
import { Location } from '@reach/router'

const MenuItemLink = ({ path = null, children = null }) => {
  if (!path) {
    return <div className="menu-item__link">{children}</div>
  }

  if (path.substr(0, 1) === '/') {
    return (
      <Link className="menu-item__link" to={path}>
        {children}
      </Link>
    )
  }

  return (
    <a className="menu-item__link" href={path} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export default ({ text, path = null, submenu = null }) => (
  <Location>
    {({ location }) => {
      const current = location.pathname.includes(path)
      return (
        <div
          className={classNames('menu-item', {
            withSubmenu: submenu,
            current
          })}
        >
          <MenuItemLink text={text} path={path}>
            <span>{text}</span>
            {submenu && <i className="icon-chevron-circle-down" />}
          </MenuItemLink>
          {submenu && (
            <div className="menu-item__submenu">
              {submenu.map(({ text: itemText, path: itemPath }) => (
                <Link key={itemText} to={itemPath} className="submenu__item">
                  {itemText}
                </Link>
              ))}
            </div>
          )}
        </div>
      )
    }}
  </Location>
)
