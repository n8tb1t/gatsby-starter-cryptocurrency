import React from 'react'
import { Link } from 'gatsby'
import cn from 'classnames'

export const STATUSES = {
  TODO: { className: 'status__todo', title: '[TODO]' },
  DONE: { className: 'status__done', title: '[DONE]' },
  IN_PROGRESS: { className: 'status__in_progress', title: '[IN PROGRESS]' },
  FUNDING: { className: 'status__funding', title: '[FUNDING REQUIRED]' }
}

const Status = ({ status }) => <strong className={status.className}>{status.title}</strong>

const ItemLink = ({ to, className, children }) =>
  RegExp('^http(s|)://').test(to) ? (
    <a target="_blank" rel="noopener noreferrer" href={to} className={className}>
      {children}
    </a>
  ) : (
    <Link to={to} className={className}>
      {children}
    </Link>
  )

const Item = ({ icon, link, text, title, status = null, avatar = null, links }) => {
  if (!status) {
    return (
      <div className="schema__item">
        <div className="schema__card schema__card_event">
          <div className="schema__content">
            {(avatar) && <img  src={avatar} alt={title} />}
            {(title) && <h3 className="">{title}</h3>}
            <p>{text}</p>
            {Object.entries(links).map(([key, value]) => (
              <div className="links" key={value}>
                <a target="_blank" rel="noopener noreferrer" href={value}>
                  {key}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <ItemLink to={link} className="schema__item">
      <div className="schema__card">
        <i className={`schema__icon icon-line-${icon}`} />
        <div className="schema__content">
          <h3>{title}</h3>
          <p>
            {text} <Status status={status} />
          </p>
        </div>
      </div>
    </ItemLink>
  )
}

const Lines = () => (
  <svg className="lines" width="100%" height="100%">
    <line className="line" x1="50%" y1="0" x2="0" y2="0" stroke="#000" />
    <line className="line" x1="50%" y1="0" x2="100%" y2="0" stroke="#000" />
    <line className="line" x1="0" y1="0" x2="0" y2="100%" stroke="#000" />
    <line className="line" x1="100%" y1="0" x2="100%" y2="100%" stroke="#000" />
    <line className="line" x1="0%" y1="100%" x2="50%" y2="100%" stroke="#000" />
    <line className="line" x1="100%" y1="100%" x2="50%" y2="100%" stroke="#000" />
  </svg>
)

export const SchemaGroup = ({ title, items, type }) => (
  <div className={cn('schema__part', { [`schema__part_${type}`]: type })}>
    <div className="part__title">
      <h4>{title}</h4>
    </div>
    <div className="schema__group">
      {items.map(item => (
        <Item key={item.title} {...item} />
      ))}
      <Lines />
    </div>
  </div>
)
