import * as React from "react"
import tw, { styled } from "twin.macro"
import Post from "../components/post"
import Img from "gatsby-image"
import Tag from "../components/tag"

const Card = (props) => (
  <div css={[
    tw`w-full p-8 bg-white shadow-xl rounded-lg`
  ]}>
    <p css={[tw`text-2xl`]}>{props.title}</p>
    <p css={[tw`text-gray-500`]}>{props.date}</p>
    <ul css={[tw`my-2 flex`]}>
      {props.tags.map( tag => (
        <li><Tag tag={tag} /></li>
      ))}
    </ul>
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

export default Card
