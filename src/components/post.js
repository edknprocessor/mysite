import * as React from "react"
import tw from "twin.macro"

const Post = ( props ) => (
  <div css={[tw`w-full`]}
  >
    <div
      className="p-post"
      dangerouslySetInnerHTML={{ __html: props.html }}
    />
  </div>
)

export default Post
