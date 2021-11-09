import * as React from "react"
import tw, { styled } from "twin.macro"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import Seo from "../components/seo"
import Card from "../components/card"
import Tag from "../components/tag"

const IndexPage = ({ data }) => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <div>
          <p css={[tw`text-center text-3xl`]}>作品リスト</p>
          {data.allMarkdownRemark.nodes.map( node => (
            <div css={[tw`mt-8`]} key={node.frontmatter.title}>
              <Card title={node.frontmatter.title}
                date={node.frontmatter.date}
                img={node.frontmatter.featuredImage.childImageSharp.fluid}
                html={node.html}
                tags={node.frontmatter.tags}
              />
            </div>
          ))}
        </div>
      </Layout>
    </>
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
        group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
      nodes {
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
`

export default IndexPage
