import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import DocNav from '../components/layout/DocNav'
import nav from '../../content/docs/current/nav.yml'

const RenderInnerList = ({ anchors, path }) => (
  <ol>
    {anchors.map(({ id, title }) => {
      const currentPath = `${path}#${id}`

      return (
        <li key={currentPath}>
          <Link to={currentPath}>{title}</Link>
        </li>
      )
    })}
  </ol>
)


const RenderList = ({ items, path }) => (
  <ol>
    {items.map(({ id, title, anchors }) => {
      let currentPath = path
      if (id !== 'index') {
        currentPath += `/${id}`
      }

      return (
        <li key={currentPath}>
          <Link to={currentPath}>{title}</Link>
          {anchors && <RenderInnerList anchors={anchors} path={currentPath} />}
        </li>
      )
    })}
  </ol>
)


const DocsPage = props => (
  <Layout location={props.location}>
    <div className="page__docs">
      <Helmet title="Documentation" />
      <div className="container docs__content">
        <h1>Documentation</h1>
        {nav.chapters.map(({ path, title, items }) => {
          const currentPath = `/docs/${path}`

          return (
            <section key={path}>
              <h2>
                <Link to={currentPath}>{title}</Link>
              </h2>
              <RenderList items={items} path={currentPath} />
            </section>
          )
        })}
      </div>
      <DocNav nav={nav.chapters} location={props.location} />
    </div>
  </Layout>
)


export default DocsPage
