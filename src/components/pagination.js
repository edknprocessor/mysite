import * as React from "react"
import tw from "twin.macro"
import { Link } from "gatsby"

const Pagination = (props) => {
  console.log(props.pre)
  console.log(props.next)

  const hasNotPrePage = props.pre === ""
  const hasNotNextPage = props.next === ""

  return(
    <ul css={[tw`flex py-4 justify-center`]}>
      {
        !hasNotPrePage &&
          <li css={[tw`px-4`]}><Link to={props.pre}>戻る←</Link></li>
      }
      {
        !hasNotNextPage &&
        <li css={[tw`px-4`]}><Link to={props.next}>→次へ</Link></li>
      }
    </ul>
  )
}

export default Pagination
