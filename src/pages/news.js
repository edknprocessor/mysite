import * as React from "react"
import PropTypes from "prop-types"
import tw from "twin.macro"
import Seo from "../components/seo"
import Post from "../components/post"
import Layout from "../components/layout"

import { graphql } from "gatsby"

const NewsPage = ({ data, pageContext }) => {
  return (
    <>
      <Seo title="News" />
      <Layout>
        <div>
          <p css={[tw`text-center text-3xl`]}>ニュース</p>
          {data.allMarkdownRemark.nodes.map( node => (
            <div css={[tw`mt-8`]} key={node.frontmatter.title}>
              <div css={[
                tw`w-full p-8 bg-white shadow-xl rounded-lg`
              ]}>
                <p css={[tw`text-2xl`]}>{node.frontmatter.title}</p>
                <p css={[tw`text-gray-500 mb-8`]}>{node.frontmatter.date}</p>
                <Post
                  html={node.html}
                />
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {fields: {collection: {eq :"news"}}}
      sort: {order: [DESC, ASC], fields: [frontmatter___date, frontmatter___title]}
    ) {
      nodes {
        frontmatter {
          date
          title
        }
        html
      }
    }
  }
`

export default NewsPage
