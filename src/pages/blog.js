import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';

const BlogPage = props => (
  <Layout location={props.location}>
    <div className="blog">
      <Helmet title="Blog" />
      <section className="container">
        <div className="blog__articles">

        </div>
      </section>
    </div>
  </Layout>
);

BlogPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default BlogPage;
