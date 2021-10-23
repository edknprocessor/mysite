import * as React from "react"
import tw, { styled } from "twin.macro"

const Card = ({ children }) => (
  <div css={[
    tw`w-full p-8 border`
  ]}>
    {children}
  </div>
)

export default Card
