import React from 'react'
import classNames from 'classnames'

export default ({ data = [], className = null }) => (
  <div className={classNames('home__list', className)}>
    {data.map((item, index) => (
      <div key={`point${index}`} className="home__point">
        <i className="icon-circle-chevron-right point__arrow" />
        <p className="point__text" dangerouslySetInnerHTML={{ __html: item }} />
      </div>
    ))}
  </div>
)
