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
          <div css={[tw`flex flex-col items-center mb-8`]}>
            <p>2022年5月10日　あにてんコミカライズ版1巻発売おめでとうございます((o(´∀｀)o))</p>
            <blockquote class="twitter-tweet"><p lang="ja" dir="ltr">本日5月10日（火）「悪役令嬢の兄に転生しました」1巻（コミック：よしまつめつ/原作：内河弘児/キャラクター原案：キャナリーヌ）発売となりました。兄カインの奮闘が始まります。よろしくおねがいします！<a href="https://t.co/eCyXEYyVqj">https://t.co/eCyXEYyVqj</a></p>&mdash; よしまつめつ (@yoshimatumetu) <a href="https://twitter.com/yoshimatumetu/status/1523977113514090496?ref_src=twsrc%5Etfw">May 10, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
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
