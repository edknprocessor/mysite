import * as React from "react"
import tw, { styled } from "twin.macro"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'
import Seo from "../components/seo"
import Card from "../components/card"

const IndexPage = ({ data }) => {
  return (
    <>
      <Seo title="Home" />
      <div css={[tw`mt-14 relative`]}>
        <StaticImage
          src="../images/header.png"
          quality={95}
          alt={data.site.siteMetadata.author}
        />
        <h1 css={[tw`absolute top-0 left-0 w-full h-full flex justify-center items-center text-white text-center text-4xl font-bold tracking-tighter`]}>
          edknprocessor
        </h1>
      </div>
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
