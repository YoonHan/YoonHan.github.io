import * as React from 'react'
import { Link } from 'gatsby'

import GithubLogo from '../assets/images/github-32.png'
import GmailLogo from '../assets/images/gmail-32.png'


const footerStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding: '120px 0 50px 0',
}

const linkSectionStyle = {
  display: 'flex',
  justifyContent: 'center',
}

const linkStyle = {
  marginRight: '1rem',
  position: 'relative',
}

const copyrightStyle = {
  fontSize: '.8rem',
  color: 'grey',
  textAlign: 'center',
}

// methods
function mailTo(e) {
  e.preventDefault()
  window.location = 'mailto:yoontopia94@gmail.com'
}

const MyFooter = () => {

  return (
    <footer style={footerStyle}>
      <section style={linkSectionStyle}>
        <Link to='https://github.com/YoonHan' style={linkStyle}>
          <img alt="GitHub" src={GithubLogo} />
        </Link>
        <Link to='#' style={linkStyle} onClick={mailTo}>
          <img alt="Gmail" src={GmailLogo} />
        </Link>
      </section>
      <p style={copyrightStyle}>© 2022 Yoon Han.</p>
    </footer>
  )
}

export default MyFooter