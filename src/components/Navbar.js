import { Link } from "gatsby"
import React, { useState } from "react"
import { FiAlignJustify } from "react-icons/fi"
import logo from "../assets/images/logo.svg"
const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className="nav">
      <div className="nav__center">
        <div className="nav__header">
          <Link to="/">
            <img src={logo} alt="simply recipe" />
          </Link>
          <button className="nav__btn" onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? "nav__links show-links" : "nav__links"}>
          <Link to="/" className="nav__link" activeClassName="active-link">
            home
          </Link>
          <Link
            to="/Recipes"
            className="nav__link"
            activeClassName="active-link"
          >
            recipes
          </Link>
          <Link to="/Tags" className="nav__link" activeClassName="active-link">
            Tags
          </Link>
          <Link to="/About" className="nav__link" activeClassName="active-link">
            about
          </Link>
          <div className="nav__link contact-link">
            <Link to="/Contact" className="btn">
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
