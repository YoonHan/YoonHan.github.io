import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql, Link } from 'gatsby'

import { purpleMain } from '../../common'


const blogPostStyles = {
  paddingTop: '72px',
  paddingBottom: '96px',
  maxWidth: 860,
  margin: '0px auto',
}

const backButtonStyles = ({ hover }) => ({
  border: '1px solid grey',
  borderRadius: '6px',
  padding: '8px 16px',
  backgroundColor: hover ? purpleMain : '#ffffff',
  color: hover ? '#ffffff' : '#000000',
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

const BlogPost = ({ data }) => {
  const [hover, setHover] = React.useState(false)

  return (
    <div style={blogPostStyles}>
      <Link to="/"
        style={backButtonStyles({hover})}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        &lt; 뒤로가기
      </Link>
      <h1 style={titleStyles}>{data.mdx.frontmatter.title}</h1>
      <p style={publishedDateStyles}>{data.mdx.frontmatter.publishedDate}</p>
      <MDXRenderer>
        { data.mdx.body }
      </MDXRenderer>
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