import * as React from 'react'
import { blueMain } from '../common'



// styles
const h2Style = {
  marginTop: '2rem',
  position: 'relative',
  borderBottom: '1px solid lightgrey',
  paddingBottom: '.5rem',
}

const h3Style = {
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

const h2LabelStyle = {
  width: '10px',
  height: '1.5rem',
  backgroundColor: blueMain,
  display: 'inline-block',
  marginRight: '.5rem',
}

const h3LabelStyle = {
  width: '10px',
  height: '1.5rem',
  backgroundColor: 'black',
  display: 'inline-block',
  marginRight: '.5rem',
}

const tableStyle = {
  border: '1px solid lightgrey',
  borderRadius: '.5rem',
  borderCollapse: 'collapse',
}

const thStyle = {
  border: '1px solid lightgrey',
  padding: '.4rem .8rem',
  backgroundColor: '#EEEEEE',
}

const tdStyle = {
  border: '1px solid lightgrey',
  padding: '.4rem .8rem',
}

// custom tag components
export function H2(props) {
  return (
    <h2 style={h2Style}>
      <div style={h2LabelStyle}></div>
      {props.children}
    </h2>
  )
}

export function H3(props) {
  return (
    <h3 style={h3Style}>
      <div style={h3LabelStyle}></div>
      {props.children}
    </h3>
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

export function Table(props) {
  return (
    <table style={tableStyle}>{props.children}</table>
  )
}

export function Th(props) {
  return (
    <th style={thStyle}>{props.children}</th>
  )
}

export function Td(props) {
  return (
    <td style={tdStyle}>{props.children}</td>
  )
}

// 커스텀 컴포넌트 매핑 객체
const MDXCustomStyles= {
  h2: H2,
  h3: H3,
  p: P,
  li: Li,
  blockquote: Blockquote,
  a: A,
  strong: Strong,
  table: Table,
  th: Th,
  td: Td,
}

export default MDXCustomStyles