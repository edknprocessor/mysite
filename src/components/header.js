import * as React from "react"
import PropTypes from "prop-types"
import tw from "twin.macro"
import { Link } from "gatsby"

const MenuItem = (props) => (
  <div css={[ tw`mx-2` ]}>
    <Link to={props.url} css={[
      tw`px-4 py-2 text-red-600 border-b hover:border-black`
    ]}>{props.title}</Link>
  </div>
)

const Header = ({ siteTitle }) => (
  <header
    css={[
      tw`w-full	fixed z-50 top-0 left-0 p-4 bg-white bg-opacity-70 shadow-md`
    ]}
  >
    <div
      css={[
        tw`flex justify-around`
      ]}
    >
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <div
        css={[
          tw`flex`
        ]}
      >
        <MenuItem url="/" title="home" />
        <MenuItem url="/contact" title="contact" />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
