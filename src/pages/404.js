import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not Found</title>
      <h1 style={headingStyles}>페이지 존재하지 않음.</h1>
      <p style={paragraphStyles}>
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        찾으시는 페이지가 존재하지 않아요.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">블로그 홈으로 가기</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
