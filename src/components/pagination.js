import * as React from "react"
import tw from "twin.macro"
import { Link } from "gatsby"

const Pagination = (props) => {
  return(
    <ul css={[tw`flex py-4 justify-center`]}>
      <li css={[tw`px-4`]}><Link to={props.pre}>前の10件←</Link></li>
      <li css={[tw`px-4`]}><Link to={props.next}>→次の10件</Link></li>
    </ul>
  )
}

export default Pagination
