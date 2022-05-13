import * as React from "react"
import tw from "twin.macro"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import Seo from "../components/seo"
import Card from "../components/card"
import AllTags from "../components/allTags"
import Pagination from "../components/pagination"

const IndexPage = ({ data, location, pageContext }) => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <div>
          <p css={[tw`text-center text-3xl`]}>作品リスト</p>
          <div css={[tw`mt-8`]}>
            <AllTags />
            <Pagination
              pre={pageContext.previousPagePath}
              next={pageContext.nextPagePath}
            />
          </div>
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
          <Pagination
            pre={pageContext.previousPagePath}
            next={pageContext.nextPagePath}
          />
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    },
    allMarkdownRemark(
      filter: {fields: {collection: {eq :"posts"}}}
      sort: {order: [DESC, ASC], fields: [frontmatter___date, frontmatter___title]}
      skip: $skip
      limit: $limit
    ) {
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
