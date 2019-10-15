import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'

export default ({ data: { post }, location, pageContext }) => {
  console.log(post)
  return (
    <Layout location={location}>
      <div className="blog">
        <Helmet title="Blog" />
        <section className="container">
          <h1 dangerouslySetInnerHTML={{ __html: post.frontmatter.title }} />


          <div className="blog__content">
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>

        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
    query PostBySlug($slug: String!) {
        post: markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            ...markdown_node
        }
    }
`