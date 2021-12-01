// base import
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

// components
import PostLists from '../components/PostLists'

// styles
const pageStyles = {
  color: "#232129",
  paddingTop: 24,
  paddingBottom: 24,
  margin: '0 auto',
  maxWidth: 760,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  maxWidth: 400,
}

const headingAccentStyles = {
  color: "#663399",
}

const paragraphStyles = {
  marginBottom: 48,
  fontSize: "1.25rem",
}

const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data

// markup
const IndexPage = ({ data }) => {

  return (
    <main style={pageStyles}>
      {/* 브라우저 탭 제목 */}
      <title>{data.site.siteMetadata.title} | Home</title>
      {/* 페이지 소개 */}
      <h1 style={headingStyles}>
        <br />
        <span style={headingAccentStyles}>— 프론트엔드 개발 공부 공간 </span>
        <span role="img" aria-label="books emojis">
          📙
        </span>
      </h1>
      <p style={paragraphStyles}>
        그때 그때 공부한 지식들을 블로그 포스트로 정리한 공간입니다 🙂
      </p>
      {/* 포스트 영역 */}
      <h1 style={headingStyles}>Posts</h1>
      <PostLists></PostLists>
    </main>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
