import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql, Link } from 'gatsby'

// colours
import { purpleMain } from '../../common'

// styles
import './blogPost.module.css';


const blogPostStyles = {
  paddingTop: '48px',
  paddingBottom: '96px',
  maxWidth: '68em',
  margin: '0px auto',
}

const backButtonStyles = ({ backButtonHover }) => ({
  border: '1px solid lightgrey',
  borderRadius: '6px',
  padding: '8px 16px',
  backgroundColor: backButtonHover ? '#ffffff' : purpleMain,
  color: backButtonHover ? '#000000' : '#ffffff',
  fontWeight: 'bold',
  textDecoration: 'none',
  transition: 'background-color .2s, color .2s',
})

const titleStyles = {
  marginBottom: '0px',
}

const publishedDateStyles = {
  color: 'grey',
  marginTop: '0px',
  marginBottom: '30px',
}

const MarkdownWrapperStyle = {
  fontSize: '1.1rem',
}


const BlogPost = ({ data }) => {
  const [backButtonHover, setBackButtonHoverHover] = React.useState(false)

  return (
    <div style={blogPostStyles}>
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