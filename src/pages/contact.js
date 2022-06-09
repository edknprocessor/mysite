import * as React from "react"
import { Link, graphql } from "gatsby"
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
        <p>edknprocessorは、えどがわけんぴ(またはえんがわ)のポートフォリオサイトです。漫画アシスタント(背景作画、トーン仕上げ等)、イラストのお仕事を募集中です。</p>
        <p css={[tw`mt-4 text-2xl text-center`]}>現在、2022年6月15~24日間のうち最大7日入れるアシスタント業務を募集しています。</p>
        <p>上記期間外でも常時お問い合わせ受け付けております。</p>
        <table css={[tw`mt-4 table-auto`]} className="p-table">
          <tr><th>作業可能時間</th><td>10:00~22:00間のうち実働7~9h</td></tr>
          <tr><th>スキル</th><td>パース定規を使った3点透視背景の描き起こし、<br/>3Dオブジェクトの配置、LT変換</td></tr>
          <tr><th>ソフトウェア</th><td>CLIP STUDIO PAINT EX</td></tr>
          <tr><th>希望報酬</th><td>日給¥10,000~、出来高制の場合時給¥1,250から</td></tr>
          <tr><th>データ共有</th><td>Dropbox, CLIP STUDIOチーム制作機能, GoogleDrive</td></tr>
          <tr><th>連絡手段</th><td>skype, Discord</td></tr>
          <tr>
            <th rowspan="3">お問い合わせ</th>
            <th>e-mail</th><td>edknprocessor★gmail.com</td>
          </tr>
          <tr>
            <th>Discord</th><td>えどけん#4200</td>
          </tr>
          <tr>
            <th>skype</th><td>hassyes</td>
          </tr>
        </table>
      </div>
    </div>
    <div css={[tw`mt-8`]}>
      <h2 css={[tw`text-2xl`]}>実績・経歴</h2>
      <dl>
        <dt>2022年~</dt>
        <dd>
          現代ものコミックのアシスタント 3件(描き起こし背景(現代物、食べ物))<br/>
          男性成人向け 2件(描き起こし背景(現代物、機械系)、写真トレース)<br/>
          異世界・悪役令嬢系 2件(描き起こし背景(自然物、乗り物、室内)、トーン、LT変換なじませ)
        </dd>
        <dt>2021年~</dt>
        <dd>
          異世界ものコミックのアシスタント 1件(背景描き起こし・3D変換線画なじませ・トーン)<br/>
          TLコミックのアシスタント 1件(背景描き起こし・3D配置・人物トーン)
        </dd>
        <dt>2019年~2021年</dt>
        <dd>民間企業にてITエンジニアとして従事</dd>
        <dt>2017年~2019年</dt>
        <dd>少女向け野球漫画のネーム、背景作画、カラーイラスト彩色</dd>
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
    <div css={[tw`mt-8`]}>
      <p>このWebサイトは<Link to="https://www.gatsbyjs.com/" target="_blank">Gatsby.js</Link>で作成しています。</p>
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
