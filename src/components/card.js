import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"

const Card = ({ children }) => (
  <div css={[
    tw`w-full p-8 border`
  ]}>
    {children}
  </div>
)

export default Card
