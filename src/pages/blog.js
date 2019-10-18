import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const PostsList = ({ posts }) => {
  const itemsList = posts.map((post, idx) => {
    const {
      fields: { slug }
    } = post
    return (
      <div className="blog__post_item" key={slug}>
        <a href={slug}><Img fluid={post.frontmatter.titleImageHero.childImageSharp.fluid} /></a>
        <div className="blog__post_title"><a href={slug}>{post.frontmatter.title.replace(/<[^>]+>/g, '')}</a></div>
        <div className="post_info">
          <div className="post_info__meta">
            <div>
              <strong>Time to read:</strong> {post.timeToRead} minutes
            </div>
            <div>
              <strong>Published:</strong> {post.frontmatter.date}
            </div>
            <div>
              <strong>Author:</strong>{' '}
              <span className="link">{post.frontmatter.author.id}</span>
            </div>
            <div>
              <strong>Category:</strong>{' '}
              <span className="link">{post.frontmatter.category}</span>
            </div>
            <div className="post_info__tags">
              <strong>Tags:</strong>{' '}
              {post.frontmatter.tags.map(tag => (
                <span key={tag}>#{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  })

  return <Fragment>{itemsList}</Fragment>
}

export default ({ data: { posts }, location, context }) => {
  console.log(posts)
  return (
    <Layout location={location}>
      <div className="blog">
        <Helmet title="Blog Posts By Date" />
        <section className="container">
          <h1>
            Latest <strong>Blog</strong> Posts:
          </h1>
          <PostsList posts={posts.edges.map(item => item.node)} context={context} />
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostsByDate {
    posts: allMarkdownRemark(
      filter: { fields: { sourceType: { eq: "blog" } }, frontmatter: { draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date, fields___slug] }
    ) {
      edges {
        node {
          ...markdown_node
        }
      }
    }
  }
`
