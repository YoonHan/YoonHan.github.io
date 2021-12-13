import * as React from 'react'
import { graphql } from 'gatsby'

// components
import PostLists from '../components/PostLists'

// styles
const pageStyles = {
  color: '#232129',
  paddingTop: 24,
  paddingBottom: 24,
  margin: '0 auto',
  maxWidth: 760,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
}

const headingStyles = {
  maxWidth: 400,
}

const headingAccentStyles = {
  color: '#663399',
}

const paragraphStyles = {
  marginBottom: 48,
  fontSize: '1.25rem',
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
        <span role='img' aria-label='books emojis'>
          📙
        </span>
      </h1>
      <p style={paragraphStyles}>
        그때 그때 공부한 지식들을 블로그 포스트로 정리한 공간입니다 🙂
      </p>
      {/* 포스트 영역 */}
      <h1 style={headingStyles}>Posts</h1>
      <PostLists allMdxData={data.allMdx}></PostLists>
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
    allMdx(sort: {order: DESC, fields: frontmatter___publishedDate}) {
      nodes {
        frontmatter {
          author
          publishedDate(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`

export default IndexPage
