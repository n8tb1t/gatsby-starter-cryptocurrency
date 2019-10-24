import React from 'react'
import Helmet from 'react-helmet'

import { graphql } from 'gatsby'
import Layout from '../components/Layout'



export default ({ data: { posts }, location }) => {


  const flatten = arr =>
    arr.map(({ node: { frontmatter, fields, ...rest } }) => ({
      ...frontmatter,
      ...fields,
      ...rest,
    }))



  // console.log(flatten(posts.edges))
  return (
    <Layout location={location}>
      <div className="blog">
        <Helmet title="Test query" />
        <section className="container">
          <h1>
            Latest <strong>Blog</strong> Posts:
          </h1>

        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostsByZZ {
    posts: allMarkdownRemark(limit: 1) {
        edges {
            node {
                rawMarkdownBody
                fields {
                    redirect
                    slug
                }
                headings {
                    value
                    depth
                }
                tableOfContents
            }
        }
    }
  }

`
