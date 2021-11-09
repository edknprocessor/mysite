/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import { StaticImage } from "gatsby-plugin-image"
import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
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
      <div
        css={[tw`w-full flex flex-col items-center`]}
      >
        <main
          css={[tw`w-full px-4 pt-24 pb-16 max-w-screen-md`]}
        >
          {children}
        </main>
        <footer css={[tw`mt-8 py-8`]}>
          © 2021 edknprocessor
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
