import * as React from "react"
import BuildingComponent from "../components/buildings-component"

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


const AboutPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Practica 1 - About
      </h1>
      <BuildingComponent></BuildingComponent>
      <a href="/" style={linkStyle}>Index</a>
    </main>
  )
}

export default AboutPage

export const Head = () => <title>About Page</title>
