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

const algoliaClient = algoliasearch('DCWT36AMWS', 'df50da353da7d8f17f4321fb0f2d6609')

const searchClient = {
  search(requests) {
    const shouldSearch = requests.some(({ params: { query } }) => query.length >= 3)
    // const shouldSearch = true
    if (shouldSearch) {
      return algoliaClient.search(requests)
    }
    return Promise.resolve({
      results: [{ hits: [] }]
    })
  },
  searchForFacetValues: algoliaClient.searchForFacetValues
}

const Input = connectSearchBox(({ refine, currentRefinement, children }) => {
  const ref = useRef({ value: null })
  const [showResults, setShowResults] = useState('none')

  useEffect(() => {
    const searchInput = ref.current
    const checkValue = () => {
      const shouldBe = searchInput.value.length > 0 ? 'block' : 'none'
      setShowResults(shouldBe)
    }

    checkValue()

    // const handleClick = e => checkValue(e)
    // searchInput.addEventListener('click', handleClick)
    // return () => searchInput.removeEventListener('click', handleClick)
  }, [ref.current.value])

  return (
    <Fragment>
      <i className="icon-search search__icon" />
      <form>
        <span className="search__form">
          <input
            ref={ref}
            onChange={e => refine(e.target.value)}
            // onBlur={() => setShowResults('none')}
            value={currentRefinement}
            className="search__input"
            type="text"
            placeholder="Search"
          />
          <div style={{ display: showResults }}> {children} </div>
        </span>
      </form>
    </Fragment>
  )
})

const Results = connectStateResults(({ searchState: state, searchResults: res, children }) =>
  res && res.nbHits > 0 ? (
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
      <InstantSearch indexName={indices[0].name} searchClient={searchClient}>

        <Input>
          <div className="search__results">
            {indices.map(({ name, title, hitComp, config }) => (
              <Index key={name} indexName={name}>
                <Configure
                  distinct
                  {...config}
                />
                <div className="search__results_title">
                  {title} <Stats />
                </div>

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
