import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Schema from '../components/home/Schema'

import { schema, schemaConfig } from '../data/schema-devs'

export default ({ location }) => (
  <Layout location={location}>
    <div className="devs">
      <Helmet title="Developers and Contributors" />
      <Schema schema={schema} config={schemaConfig} />
    </div>
  </Layout>
)
