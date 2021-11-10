import * as React from "react"
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"

import kebabCase from "lodash/kebabCase"

const TagList = (props) => {
  return(
    <ul css={[tw`my-2 flex`]}>
      {props.tags.map(tag => (
        <li key={tag.fieldValue}>
          <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
            <div css={[tw`text-sm px-2 py-1 mr-2 bg-red-400 text-white`]}>
              {tag.fieldValue}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default TagList
