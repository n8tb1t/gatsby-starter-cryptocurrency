import React, { Fragment } from 'react'
import { Highlight, Snippet } from 'react-instantsearch-dom'
import { Link } from 'gatsby'

export const DocsHit = clickHandler => ({ hit }) => {

  return (
    <Fragment>
      <div className="search__results_left">
        <Link to={`${hit.parentSlug}`}>
          <Highlight attribute="parentTitle" hit={hit} tagName="mark" />
        </Link>
      </div>
      <div className="search__results_right">

        <Link to={`${hit.chapterSlug}`}>
          <Highlight attribute="chapterTitle" hit={hit} tagName="mark" />
          <br/>
          <Snippet className="search__results_snippet" attribute="pageContent" hit={hit} tagName="mark" />
        </Link>
      </div>
    </Fragment>
  )
}

export const PostHit = clickHandler => ({ hit }) => {
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
