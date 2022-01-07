import * as React from "react"
import tw from "twin.macro"
import Post from "../components/post"
import Img from "gatsby-image"
import TagList from "../components/tagList"

const Card = (props) => {
  const tagList = props.tags.map(tag => {
    return {fieldValue: tag}
  })

  return(
    <div css={[
      tw`w-full p-8 bg-white shadow-xl rounded-lg`
    ]}>
      <p css={[tw`text-2xl`]}>{props.title}</p>
      <p css={[tw`text-gray-500`]}>{props.date}</p>
      <TagList tags={tagList} />
      <Img
        alt={props.title}
        fluid={props.img}
        css={[tw`my-8`]}
      />
      <Post
        html={props.html}
      />
    </div>
  )
}

export default Card
