import React from "react"
import { Link } from "gatsby"

export default function Nav({ element, left, right, bottom }) {
  const About = require("../images/about.inline.svg")
  const Contact = require("../images/contact.inline.svg")
  const Home = require("../images/home.inline.svg")
  const HorizontalHome = require("../images/home-horizont.inline.svg")
  const Projects = require("../images/projects.inline.svg")

  return (
    <nav>
      <div className="nav__left">
        <div className="nav__left-back"></div>
        <Link className="nav__left-link" to={left.to}>
          {element === "about" && <Contact className="nav__side-text" />}
          {element === "contact" && <Home className="nav__side-text" />}
          {element !== "about" && element !== "contact" && (
            <About className="nav__side-text" />
          )}
        </Link>
      </div>
      <div className="nav__right">
        <div className="nav__right-back"></div>
        <Link className="nav__right-link" to={right.to}>
          {element === "about" && <Home className="nav__side-text" />}
          {element === "contact" && <About className="nav__side-text" />}
          {element !== "about" && element !== "contact" && (
            <Contact className="nav__side-text" />
          )}
        </Link>
      </div>
      <div className="nav__bottom">
        <div className="nav__bottom-back"></div>
        <Link className="nav__bottom-link" to={bottom.to}>
          {element === "projects" ? (
            <HorizontalHome className="nav__bottom-text hm" />
          ) : (
            <Projects className="nav__bottom-text proj" />
          )}
        </Link>
      </div>
    </nav>
  )
}
