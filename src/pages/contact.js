import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import tw from "twin.macro"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = ({ data }) => (
  <Layout>
    <Seo title="Contact" />
    <div css={[tw`flex flex-col items-center`]}>
      <StaticImage
        src="../images/edkn.png"
        width={150}
        quality={95}
        alt={data.site.siteMetadata.author}
        css={[tw`mb-4`]}
      />
      <h1 css={[tw`text-3xl text-center`]}>
        {data.site.siteMetadata?.author || `Author`}
      </h1>
      <div css={[tw`mt-4`]}>
        <p>edknprocessorは、えんがわのポートフォリオサイトです。漫画アシスタント(背景作画、トーン仕上げ等)のお仕事を募集中です。</p>
        <div css={[tw`flex items-center justify-center`]}>
          連絡先:
          <StaticImage
            src="../images/mail.png"
            width={250}
            quality={100}
            alt="e-mailaddress"
          />
        </div>
      </div>
    </div>
    <div css={[tw`mt-8`]}>
      <h2 css={[tw`text-2xl`]}>実績・経歴</h2>
      <dl>
        <dt>2019年~2021年</dt>
        <dd>民間企業にてITエンジニアとして従事</dd>
        <dt>2017年~2019年</dt>
        <dd>『花鈴のマウンド』(星桜高校漫画研究会)ネーム、背景作画、カラーイラスト彩色</dd>
        <dt>2017年</dt>
        <dd>東京農工大学を卒業</dd>
        <dt>2016年</dt>
        <dd>漫画同人誌『ポポローグのギャグ本 IN牧場』(PopoloCrois20thAnniversary)発行</dd>
        <dt>2015年</dt>
        <dd>
          漫画同人誌『Escape from CLOSED EYE』(C89)発行<br/>
          漫画同人誌『殺意』(博麗神社秋季例大祭)発行<br/>
          漫画同人誌『ポポローグのギャグ本』(おみやげのエルマニオ)発行
        </dd>
        <dt>2014年</dt>
        <dd>
          漫画同人誌『紅いオーデイン』(C87)発行<br/>
          漫画同人誌『ナイフの遺言』(C86)発行<br/>
          漫画同人誌『邪仙の本能』(博麗神社例大祭11)発行<br/>
          漫画同人誌『アメは毒』(月の宴7)発行
        </dd>
        <dt>2013年</dt>
        <dd>漫画同人誌『神様のカルト』(もりや神社例大祭三)発行</dd>
      </dl>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`

export default ContactPage
