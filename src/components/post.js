import * as React from "react"
import tw, { styled } from "twin.macro"

const Post = ( props ) => (
  <div css={[tw`w-full`]}
  >
    <div
      className="prose"
      dangerouslySetInnerHTML={{ __html: props.html }}
    />
  </div>
)

export default Post
