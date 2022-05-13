import * as React from "react"
import tw from "twin.macro"

const Card = (props) => {

  return(
    <div css={[
      tw`w-full p-8 bg-white shadow-xl rounded-lg`
    ]}>
      <p css={[tw`text-2xl`]}>{props.title}</p>
      <p css={[tw`text-gray-500`]}>{props.date}</p>
      { props.children }
    </div>
  )
}

export default Card
