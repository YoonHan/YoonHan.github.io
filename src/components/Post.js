import * as React from 'react'


const articleStyles = ({hover}) => ({
  backgroundColor: hover ? '#FFF2FB': '',
  padding: '8px',
  borderRadius: '4px',
  cursor: 'pointer',
})

const h2AccentStyles = {
  color: '#663399',
  margin: '0px 0px 10px 0px',
}

const publishedDateStyles = {
  color: 'grey',
  marginTop: '0px',
  marginBottom: '0px',
}

const Post = ({ mdxData }) => {
  const [hover, setHover] = React.useState(false)

  return (
    <article style={articleStyles({hover})}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <h2 style={h2AccentStyles}>
        {mdxData.frontmatter.title}
      </h2>
      <p style={publishedDateStyles}>
        {mdxData.frontmatter.publishedDate}
      </p>
    </article>
  )
}

export default Post