import React from 'react'

import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Ecosystem from '../components/home/Ecosystem'
import GettingStarted from '../components/home/GettingStarted'
import AllInOne from '../components/home/AllInOne'
import Giants from '../components/home/Giants'
import Expose from '../components/home/Expose'
import Schema from '../components/home/Schema'
import References from '../components/home/References'
import Api from '../components/home/Api'
import '../styles/main.scss'

export default props => (
  <Layout location={props.location}>
    <div className="home">
      <Helmet title="Blockchain Dapps Platform" />
      <AllInOne />
      <Ecosystem />
      <Giants />
      <GettingStarted />
      <Schema />
      <Expose />
      <Api />
      <References />
    </div>
  </Layout>
)
