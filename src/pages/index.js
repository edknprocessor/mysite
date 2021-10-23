import * as React from "react"
import tw, { styled } from "twin.macro"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import Seo from "../components/seo"
import Card from "../components/card"
import Post from "../components/post"
import Img from "gatsby-image"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div>
        <Seo title="Home" />
        {data.allMarkdownRemark.nodes.map( node => (
          <div css={[tw`mt-8`]} key={node.frontmatter.title}>
            <Card>
              <p css={[tw`text-2xl`]}>{node.frontmatter.title}</p>
              <p css={[tw`text-gray-500`]}>{node.frontmatter.date}</p>
              <Img
                alt={node.frontmatter.title}
                fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                css={[tw`my-8`]}
              />
              <Post
                html={node.html}
              />
            </Card>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    },
    allMarkdownRemark(
      sort: {order: [DESC, ASC], fields: [frontmatter___date, frontmatter___title]}
    ) {
      nodes {
        frontmatter {
          date
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
`

export default IndexPage
