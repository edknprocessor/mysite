import React from "react"
import PropTypes from "prop-types"
import tw from "twin.macro"
import Layout from "../components/layout"
import AllTags from "../components/allTags"
import Card from "../components/card"

// Components
import { graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { group, edges, totalCount } = data.allMarkdownRemark
  return (
    <Layout>
      <p css={[tw`text-center text-3xl`]}>タグ絞り込み: {tag}</p>
      <div css={[tw`mt-8`]}>
        <AllTags />
      </div>
      {edges.map( edge => (
        <div css={[tw`mt-8`]} key={edge.node.frontmatter.title}>
          <Card title={edge.node.frontmatter.title}
            date={edge.node.frontmatter.date}
            img={edge.node.frontmatter.featuredImage.childImageSharp.fluid}
            html={edge.node.html}
            tags={edge.node.frontmatter.tags}
          />
        </div>
      ))}
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            tags
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
          }
          html
        }
      }
    }
  }
`
