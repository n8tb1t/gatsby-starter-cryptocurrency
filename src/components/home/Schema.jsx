import React from 'react'

import { SchemaGroup } from '../schema/schemaHelpers'

export default ({ schema, config, children }) => (
  <section className={`generic__part schema schema__${config.theme}`}>
    <div className="container schema__container">
      <h1 className="schema__title">{config.title}</h1>
      {children}
      {schema.map(group => (
        <SchemaGroup key={group.title} {...group} />
      ))}
    </div>
  </section>
)
