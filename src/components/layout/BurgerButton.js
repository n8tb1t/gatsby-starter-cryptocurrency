import React from 'react'

export default ({ status = 'burger', onClick, className = '' }) => (
  <button className={`btn-burger ${status} ${className}`} onClick={onClick}>
    <div className="btn-burger__back">
      <div className="btn-burger__line" />
    </div>
  </button>
)
