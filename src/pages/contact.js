import * as React from "react"
import { Link, graphql } from "gatsby"
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
      <h1 css={[tw`text-3xl text-center`]}>
        {data.site.siteMetadata?.author || `Author`}
      </h1>
      <div css={[tw`mt-4`]}>
        <p>edknprocessorは、えどがわけんぴ(またはえんがわ)のポートフォリオサイトです。</p>
	      <p>新規募集時は<a href="https://ganmo.j-comi.co.jp/posts" target="_blank">GANMO様</a>にて告知しています。</p>
        <p>メールアドレス： edknprocessor☆gmail.com<br>
          X(旧Twitter): <a href="https://twitter.com/kurokashuka" target="_blank">@kurokashuka</a>
        </p>
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
