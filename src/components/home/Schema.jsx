import React from 'react'
import { Link } from 'gatsby'

const SchemaItem = ({ icon, link, text, title, status, avatar = null, links }) => {
  // eslint-disable-next-line consistent-return
  const Status = ({ status }) => {
    // eslint-disable-next-line default-case
    switch (status) {
      case 0:
        return <strong className="status__todo">[TODO]</strong>
      case 1:
        return <strong className="status__done">[DONE]</strong>
      case 2:
        return <strong className="status__in_progress">[IN PROGRESS]</strong>
      case 3:
        return <strong className="status__funding">[FUNDING REQUIRED]</strong>
    }
  }

  const ItemLink = ({ to, className, children, status }) => {
    if (status === 3) {
      return (
        <a target="_blank" rel="noopener noreferrer" href={to} className={className}>
          {children}
        </a>
      )
    }

    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  }

  if (avatar) {
    return (
      <div className="schema__item" status={status}>
        <div className="schema__card schema__card_event">
          <div className="schema__content">
            <img width={200} src={avatar} alt={title} />
            <h3 className="">{title}</h3>
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
    <ItemLink to={link} className="schema__item" status={status}>
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

const SchemaPart = ({ title, items }) => (
  <div className="schema__part">
    <div className="part__title">
      <h4>{title}</h4>
    </div>
    <div className="schema__group">
      {items.map(item => (
        <SchemaItem key={item.title} {...item} />
      ))}
      <Lines />
    </div>
  </div>
)

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

export default ({ title, schema }) => (
  <section className="generic__part schema">
    <div className="container schema__container">
      <h1 className="schema__title">{title}</h1>
      {schema.map(part => (
        <SchemaPart key={part.title} {...part} />
      ))}
    </div>
  </section>
)
