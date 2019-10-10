import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import Ecosystem from '../components/home/Ecosystem';
import GettingStarted from '../components/home/GettingStarted';
import AllInOne from '../components/home/AllInOne';
import Giants from '../components/home/Giants';
import Expose from '../components/home/Expose';
import Schema from '../components/home/Schema';
import References from '../components/home/References';
import Seo from '../components/home/Seo';
import '../styles/main.scss';

const IndexPage = props => (
  <Layout location={props.location}>
    <div className="home">
      <Helmet title="Blockchain Dapps Platform" />
      <AllInOne />
      <Ecosystem />
      <Giants />
      <GettingStarted />
      <Schema />
      <Expose />
      <Seo />
      <References />
    </div>
  </Layout>
);
IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
