import React, { Fragment } from 'react'
import { Highlight, Snippet } from 'react-instantsearch-dom'
import { Link } from 'gatsby'

export const DocsHit = clickHandler => ({ hit }) => {
  // console.log(hit)
  return (
    <div>
zzsz
    </div>
  )
}

export const PostHit = clickHandler => ({ hit }) => {
  console.log(hit)

  return (
    <Fragment>
      <div className="search__results_left">
        <Link to={`${hit.slug}`}>
          <Highlight attribute="title" hit={hit} tagName="mark" />
        </Link>
      </div>
      <div className="search__results_right">
        <Highlight attribute="date" hit={hit} tagName="mark" />
        <Link to={`${hit.slug}`}>
          <Snippet attribute="internal.content" hit={hit} tagName="mark" />
        </Link>
      </div>
    </Fragment>
  )
}
