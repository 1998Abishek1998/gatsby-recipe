import React from "react"

const Layout = () => {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} <span> Simple Recipes </span>. Build
        with
        <a href="https://www.gatsbyjs.com/"> gatsby </a>
      </p>
    </footer>
  )
}

export default Layout
