import React from 'react'
import Helmet from 'react-helmet'

import { Link } from 'gatsby'
import Layout from '../components/Layout'
import DocNav from '../components/layout/DocNav'
import SwitchVersion from '../components/docs/SwitchVersion'
import versionHelper from '../lib/versionHelper'

const {
  siteMetadata: { siteUrl }, docs: {versions}
} = require('../../config')

export default ({ location, pageContext }) => (
  <Layout location={location}>
    <div className="page__docs">
      <Helmet title={(pageContext.title && pageContext.title) || 'Documentation'}>
        {pageContext.version !== ''
          ? [
              <link
                rel="canonical"
                href={
                  siteUrl +
                  location.pathname.replace(
                    new RegExp(`/(${versions.map(versionHelper.getPrefixedVersion).join('|')})/`),
                    '/'
                  )
                }
              />,
              <meta name="robots" content="noindex" />
            ]
          : false}
      </Helmet>
      <div className="container docs__content">
        <SwitchVersion location={location} currentVersion={pageContext.version} />
        <div dangerouslySetInnerHTML={{ __html: pageContext.html }} />
        <div className="docs__content__help">
          <p>
            <a href={pageContext.urlEditDocumentation}>
              You can also help us improve the documentation of this page.
            </a>
          </p>
        </div>
      </div>
      <div className="container docs__nav">
        {pageContext.previous.slug && (
          <Link className="prev" to={`/${pageContext.previous.slug}`}>
            <i className="icon-chevron-left" />
            <span>{pageContext.previous.title}</span>
          </Link>
        )}
        {pageContext.next.slug && (
          <Link className="next" to={`/${pageContext.next.slug}`}>
            <span>{pageContext.next.title}</span>
            <i className="icon-chevron-right" />
          </Link>
        )}
      </div>
      <DocNav version={pageContext.version} nav={pageContext.nav.chapters} location={location} />
    </div>
  </Layout>
)
