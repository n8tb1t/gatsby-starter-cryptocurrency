import { graphql } from 'gatsby'

// eslint-disable-next-line import/prefer-default-export
export const query = graphql`
  fragment markdown_node on MarkdownRemark {
    excerpt
    timeToRead
    fields {
      slug
      categorySlug
      tagSlugs
    }
    frontmatter {
      title
      date(formatString: "MMMM Do YYYY")
      rawDate: date
      tags
      category
      author {
        id
        bio
        avatar
        twitter
        fields {
          slug
        }
      }
      titleImageCC
      titleImage {
          childImageSharp {
              fluid(maxWidth: 700, quality: 70) {
                  ...GatsbyImageSharpFluid
              }
          }
      }
    }
  }
`