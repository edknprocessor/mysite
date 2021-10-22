import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import tw from "twin.macro"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = ({ data }) => (
  <Layout>
    <Seo title="Contact" />
    <StaticImage
      src="../images/edkn.png"
      width={150}
      quality={95}
      alt={data.site.siteMetadata.author}
      css={[tw`mb-4`]}
    />
    <h1>{data.site.siteMetadata?.author || `Author`}</h1>
    <p>edknprocessorは、えんがわのポートフォリオサイトです。</p>
    <div>
      <div>
        email:
        <StaticImage
          src="../images/mail.png"
          width={250}
          quality={100}
          alt="e-mailaddress"
        />
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
