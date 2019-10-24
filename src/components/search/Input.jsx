import React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'
import classNames from 'classnames'

export default connectSearchBox(({ refine, ...rest }) => {
  console.log(rest)
  // return (
  //   <form>
  //     <input
  //       type="text"
  //       placeholder="Search"
  //       aria-label="Search"
  //       onChange={e => refine(e.target.value)}
  //       {...rest}
  //     />
  //   </form>
  // )

  return (
    <div className="search header__search">
      <i className="icon-search search__icon" />
      <form>
        <input
          onChange={e => refine(e.target.value)}
          {...rest}
          className="search__input"
          type="search"
          placeholder="Search"
        />
      </form>
    </div>
  )

})
