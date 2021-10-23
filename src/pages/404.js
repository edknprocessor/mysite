import * as React from "react"
import tw from "twin.macro"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1 css={[tw`text-3xl`]}>404: Not Found</h1>
    <p>
      指定したURLに誤りがあるようです。
      <Link to="/">ホームへ戻る</Link>
    </p>
  </Layout>
)

export default NotFoundPage
