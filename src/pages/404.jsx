import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import notFoundSvg from '../images/404.svg'

export default props => (
  <Layout location={props.location}>
    <div className="notfound">
      <Helmet title="404" />
      <div className="container notfound__content">
        <div className="notfound__text">
          <h1>Oops!</h1>
          <p>Looks like this page doesn't exist...</p>
        </div>
        <img src={notFoundSvg} alt="not found" width="371" height="344" />
      </div>
    </div>
  </Layout>
)
