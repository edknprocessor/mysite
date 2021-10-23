import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import tw from "twin.macro"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = ({ data }) => (
  <Layout>
    <Seo title="Contact" />
    <div css={[tw`flex flex-col items-center`]}>
      <StaticImage
        src="../images/edkn.png"
        width={150}
        quality={95}
        alt={data.site.siteMetadata.author}
        css={[tw`mb-4`]}
      />
      <h1
        css={[tw`text-3xl text-center`]}
      >{data.site.siteMetadata?.author || `Author`}</h1>
      <div css={[tw`mt-4`]}>
        <p>edknprocessorは、えんがわのポートフォリオサイトです。漫画アシスタント(背景作画、トーン仕上げ等)のお仕事を募集中です。</p>
        <div css={[tw`flex items-center justify-center`]}>
          連絡先:
          <StaticImage
            src="../images/mail.png"
            width={250}
            quality={100}
            alt="e-mailaddress"
          />
        </div>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`

export default ContactPage
