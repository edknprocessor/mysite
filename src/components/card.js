import * as React from "react"
import tw, { styled } from "twin.macro"

const Card = ({ children }) => (
  <div css={[
    tw`w-full p-8 bg-white shadow-xl rounded-lg`
  ]}>
    {children}
  </div>
)

export default Card
