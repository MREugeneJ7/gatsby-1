import * as React from "react"
import Layout from "../components/layout"
import {Link} from 'gatsby'

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


const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Layout>
        <h1 style={headingStyles}>
          Practica 1 - Index
        </h1>
        <Link to="/about" style={linkStyle}>about</Link>
      </Layout >
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
