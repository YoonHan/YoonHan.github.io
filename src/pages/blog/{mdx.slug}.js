import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import { graphql, Link } from 'gatsby'

// colours
import { blueMain } from '../../common'

// components
import MyFooter from '../../components/MyFooter'

// blog post design system
import MDXCustomStyles from '../../components/MDXDesignSystem'


const blogPostStyles = {
  paddingTop: '48px',
  maxWidth: '68em',
  margin: '0px auto',
  position: 'relative',
}

const backButtonStyles = ({ backButtonHover }) => ({
  border: backButtonHover ? '1px solid lightgrey' : '',
  borderRadius: '6px',
  padding: '8px 16px',
  backgroundColor: backButtonHover ? '#ffffff' : blueMain,
  color: backButtonHover ? '#000000' : '#ffffff',
  fontWeight: 'bold',
  textDecoration: 'none',
  transition: 'background-color .2s, color .2s',
})

const moveToTopButtonStyles = ({ moveToTopButtonHover }) => ({
  position: 'fixed',
  bottom: '48px',
  width: '50px',
  height: '50px',
  cursor: 'pointer',
  marginLeft: '920px',
  transition: 'background-color .2s, color .2s',
  border: moveToTopButtonHover ? '1px solid lightgrey' : 'none',
  borderRadius: '15px',
  boxShadow: '1px 1px 2px 1px lightgrey',
  color: moveToTopButtonHover ? '#000000' : '#000000',
  backgroundColor: moveToTopButtonHover ? '#ffffff' : '#f1f3f5',
  zIndex: '10',
})

const titleStyles = {
  marginBottom: '0px',
}

const publishedDateStyles = {
  color: 'grey',
  marginTop: '8px',
  marginBottom: '30px',
}

const MarkdownWrapperStyle = {
  fontSize: '1.1rem',
}

// methods
const topButtonHandler = () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

// Component
const BlogPost = ({ data }) => {
  const [backButtonHover, setBackButtonHoverHover] = React.useState(false)
  const [moveToTopButtonHover, setMoveToTopButtonHover] = React.useState(false)

  return (
    <div className="blog-post" style={blogPostStyles}>
      <Link to="/"
        className="back-button"
        role="button"
        style={backButtonStyles({backButtonHover})}
        onPointerOver={() => setBackButtonHoverHover(true)}
        onPointerOut={() => setBackButtonHoverHover(false)}
      >
        &lt; 뒤로가기
      </Link>
      <button
        style={moveToTopButtonStyles({moveToTopButtonHover})}
        onPointerOver={() => setMoveToTopButtonHover(true)}
        onPointerOut={() => setMoveToTopButtonHover(false)}
        onClick={topButtonHandler}
      >
        Top
      </button>
      <h1 style={titleStyles}>{data.mdx.frontmatter.title}</h1>
      <p style={publishedDateStyles}>{data.mdx.frontmatter.publishedDate}</p>
      <div style={MarkdownWrapperStyle}>
        <MDXProvider
          components={MDXCustomStyles}
        >
          <MDXRenderer>
            { data.mdx.body }
          </MDXRenderer>
        </MDXProvider>
      </div>
      <MyFooter />
    </div>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        publishedDate(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export default BlogPost