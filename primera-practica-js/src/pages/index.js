import * as React from "react"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const navbar = {
  padding: "20px",
  "background-color": "#67b8aa",
  margin: "none"
}


const IndexPage = () => {
  return (
    <>
      <nav style={navbar}>
        This is a navbar
      </nav>
      <main style={pageStyles}>
        <h1 style={headingStyles}>
          Practica 1 - Index
        </h1>
        <a href="/about" style={linkStyle}>about</a>
      </main>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
