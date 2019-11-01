import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Schema from '../components/home/Schema'

import roadMapSchema from '../data/schema-roadmap'

export default ({ location }) => (
  <Layout location={location}>
    <div className="roadmap">
      <Helmet title="Roadmap" />
      <Schema
        schema={roadMapSchema}
        title={
          <Fragment>
            The Catalyst Network <strong>Roadmap</strong>
          </Fragment>
        }
      />
    </div>
  </Layout>
)
