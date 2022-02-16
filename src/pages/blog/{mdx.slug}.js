import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql, Link } from 'gatsby'

// colours
import { blueMain, blueSub } from '../../common'

// styles
import './blogPost.module.css'


const blogPostStyles = {
  paddingTop: '48px',
  paddingBottom: '96px',
  maxWidth: '68em',
  margin: '0px auto',
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
  right: '48px',
  width: '50px',
  height: '50px',
  borderRadius: '15px',
  backgroundColor: moveToTopButtonHover ? '#ffffff' : '#f1f3f5',
  border: moveToTopButtonHover ? '1px solid lightgrey' : '',
  color: moveToTopButtonHover ? '#000000' : '#000000',
  cursor: 'pointer',
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

const topButtonHandler = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


const BlogPost = ({ data }) => {
  const [backButtonHover, setBackButtonHoverHover] = React.useState(false)
  const [moveToTopButtonHover, setMoveToTopButtonHover] = React.useState(false)

  React.useEffect(() => {
    window.onscroll = function(e) {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        console.log(123)
      } else {
        console.log(456)
      }
    }

    return () => {
      console.log(123)
    }
  }, [])

  return (
    <div class="blog-post" style={blogPostStyles}>
      <button
        style={moveToTopButtonStyles({moveToTopButtonHover})}
        onPointerOver={() => setMoveToTopButtonHover(true)}
        onPointerOut={() => setMoveToTopButtonHover(false)}
        onClick={topButtonHandler}
      >
        Top
      </button>
      <Link to="/"
        style={backButtonStyles({backButtonHover})}
        onPointerOver={() => setBackButtonHoverHover(true)}
        onPointerOut={() => setBackButtonHoverHover(false)}
      >
        &lt; 뒤로가기
      </Link>
      <h1 style={titleStyles}>{data.mdx.frontmatter.title}</h1>
      <p style={publishedDateStyles}>{data.mdx.frontmatter.publishedDate}</p>
      <div style={MarkdownWrapperStyle}>
        <MDXRenderer>
          { data.mdx.body }
        </MDXRenderer>
      </div>
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