import React, { useState, useRef, useEffect, Fragment } from 'react'
import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  Index,
  connectSearchBox,
  connectStateResults,
  Hits,
  Configure
} from 'react-instantsearch-dom'

import * as hitComps from './hitComps'

const searchClient = () => {
  const algoliaClient = algoliasearch('DCWT36AMWS', 'df50da353da7d8f17f4321fb0f2d6609')
  return {
    search(requests) {
      const shouldSearch = requests.some(({ params: { query } }) => query.length >= 3)

      if (shouldSearch) {
        return algoliaClient.search(requests)
      }
      return Promise.resolve({
        results: [{ hits: [] }]
      })
    },
    searchForFacetValues: algoliaClient.searchForFacetValues
  }
}

const Input = connectSearchBox(({ refine, currentRefinement, children }) => {
  const [showResults, setShowResults] = useState('none')

  const inputRef = useRef({ value: null })
  const resultsRef = useRef({ value: null })

  const isShowResults = query => setShowResults(query.length > 0 ? 'block' : 'none')

  const handleFocus = e => isShowResults(e.target.value)

  const events = [`mousedown`, `touchstart`]

  const detectClickOutside = event =>
    !resultsRef.current.contains(event.target) && setShowResults('none')

  useEffect(() => {
    for (const event of events) document.addEventListener(event, detectClickOutside)
    return () => {
      for (const event of events) document.removeEventListener(event, detectClickOutside)
    }
  }, [events])

  useEffect(() => {
    isShowResults(inputRef.current.value)
  }, [inputRef.current.value])

  return (
    <Fragment>
      <i className="icon-search search__icon" />
      <form>
        <span className="search__form">
          <input
            ref={inputRef}
            onChange={e => refine(e.target.value)}
            value={currentRefinement}
            onFocus={handleFocus}
            className="search__input"
            type="text"
            placeholder="Search"
          />
          <div ref={resultsRef} style={{ display: showResults }}>
            {' '}
            {children}{' '}
          </div>
        </span>
      </form>
    </Fragment>
  )
})

const Results = connectStateResults(({ searchState: state, searchResults: res, children }) =>
  res && res.nbHits > 0 && state.query.length >= 3 ? (
    children
  ) : (
    <div className="search__results_empty">No results for {state.query}</div>
  )
)

const Stats = connectStateResults(
  ({ searchResults: res }) =>
    res && res.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`
)

export default function Search({ indices }) {
  return (
    <div className="search header__search">
      <InstantSearch indexName={indices[0].name} searchClient={searchClient()}>
        <Input>
          <div className="search__results">
            {indices.map(({ name, title, hitComp, config }) => (
              <Index key={name} indexName={name}>
                <Configure distinct length={3} {...config} />
                <div className="search__results_title">{title}</div>

                <Results>
                  <Hits hitComponent={hitComps[hitComp]()} />
                </Results>
              </Index>
            ))}
          </div>
        </Input>
      </InstantSearch>
    </div>
  )
}
