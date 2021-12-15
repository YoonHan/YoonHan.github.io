import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql, Link } from 'gatsby'

import { hightlightColor } from '../../common'


const blogPostStyles = {
  paddingTop: '72px',
  paddingBottom: '96px',
  maxWidth: 760,
  margin: '0px auto',
}

const backButtonStyles = ({ hover }) => ({
  color: hover ? hightlightColor : '#000000',
  fontWeight: 'bold',
  textDecoration: 'none',
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