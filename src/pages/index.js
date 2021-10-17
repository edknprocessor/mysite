import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import tw, { styled } from "twin.macro"
import Layout from "../components/layout"
import Seo from "../components/seo"

// const Button = tw.button`
//   bg-blue-500 hover:bg-blue-800 text-white p-2 rounded
// `

const IndexPage = () => (
  <Layout>
    <div>
      <Seo title="Home" />
      <h1>Hi peopleeeee</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </div>
  </Layout>
)

export default IndexPage
