import React from "react"

const navbar = {
    padding: "20px",
    "background-color": "#67b8aa",
    margin: "none"
  }


export default function Layout({ children }) {
    return (
        <div>
            <nav style={navbar}>
                This is a navbar
            </nav>
            {children}
        </div>
    )
}