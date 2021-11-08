import * as React from "react"
import tw, { styled } from "twin.macro"

const Tag = (props) => (
  <div css={[tw`text-sm px-2 py-1 mr-2 bg-red-400 text-white`]}>{props.tag}</div>
)

export default Tag
