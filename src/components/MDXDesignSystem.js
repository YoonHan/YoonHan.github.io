import * as React from 'react'


// styles
const h2Style = {
  marginTop: '2rem',
  position: 'relative',
  borderBottom: '1px solid lightgrey',
  paddingBottom: '.5rem',
}

const pStyle = {
  lineHeight: '1.7rem',
}

const liStyle = {
  margin: '1rem 0',
}

const aStyle = {
  textDecoration: 'none',
}

const strongStyle = {
  backgroundColor: '#e7f5ff',
  color: '#339af0',
  fontSize: '1rem',
  borderRadius: '6px',
  padding: '2px 4px',
}

const blockquoteStyle = {
  color: 'black',
  backgroundColor: 'rgba(0, 0, 0, 0.04)',
  display: 'block',
  borderRadius: '12px',
  margin: 0,
  paddingBlockStart: '1em',
  paddingBlockEnd: '1em',
  paddingInlineStart: '40px',
  paddingInlineEnd: '40px',
}

const labelStyle = {
  width: '10px',
  height: '1.5rem',
  backgroundColor: '#1c7ed6',
  display: 'inline-block',
  marginRight: '.5rem',
}


// custom tag components
export function H2(props) {
  return (
    <h2 style={h2Style}>
      <div style={labelStyle}></div>
      {props.children}
    </h2>
  )
}

export function P(props) {
  return (
    <p {...props} style={pStyle}>{props.children}</p>
  )
}

export function Li(props) {
  return (
    <li {...props} style={liStyle}></li>
  )
}

export function A(props) {
  return (
    <a {...props} style={aStyle}>{props.children}</a>
  )
}

export function Blockquote(props) {
  return (
    <blockquote {...props} style={blockquoteStyle}></blockquote>
  )
}

export function Strong(props) {
  return (
    <strong style={strongStyle}>{props.children}</strong>
  )
}

// 커스텀 컴포넌트 매핑 객체
const MDXCustomStyles= {
  h2: H2,
  p: P,
  li: Li,
  blockquote: Blockquote,
  a: A,
  strong: Strong,
}

export default MDXCustomStyles