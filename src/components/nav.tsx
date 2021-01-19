import React from "react"
import { Link } from "gatsby"

export default function Nav({ element, left, right, bottom }) {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth

  const About = require("../images/about.inline.svg")
  const AboutH = require("../images/about-horizontal.inline.svg")
  const Contact = require("../images/contact.inline.svg")
  const ContactH = require("../images/contact-horizontal.inline.svg")
  const Home = require("../images/home.inline.svg")
  const HomeH = require("../images/home-horizont.inline.svg")
  const Projects = require("../images/projects.inline.svg")

  const toggleNav = () => {
    const nav = document.getElementsByClassName("nav")[0]
    const button = document.getElementsByClassName("nav__button")[0]
    if (nav.classList.contains("nav_showed")) {
      nav.classList.remove("nav_showed")
      button.classList.remove("opened_nav")
    } else {
      nav.classList.add("nav_showed")
      button.classList.add("opened_nav")
    }
  }

  return (
    <div>
      <button className="nav__button" onClick={toggleNav}>
        <div className="nav__button-border"></div>
        <div className="nav__burger-box">
          <div className="nav__burger"></div>
        </div>
      </button>
      <nav className="nav">
        <div className="nav__left">
          <div className="nav__left-back"></div>
          <Link className="nav__left-link" to={left.to}>
            {element === "about" && width > 541 && (
              <Contact className="nav__side-text" />
            )}
            {element === "contact" && width > 541 && (
              <Home className="nav__side-text" />
            )}
            {element !== "about" && element !== "contact" && width > 541 && (
              <About className="nav__side-text" />
            )}
            {element !== "about" &&
              element !== "contact" &&
              element !== "projects" &&
              width <= 541 && <AboutH className="nav__side-text ab" />}
            {(element === "about" ||
              element === "contact" ||
              element === "projects") &&
              width <= 541 && <HomeH className="nav__side-text hm" />}
          </Link>
        </div>
        <div className="nav__right">
          <div className="nav__right-back"></div>
          <Link className="nav__right-link" to={right.to}>
            {element === "about" && width > 541 && (
              <Home className="nav__side-text" />
            )}
            {element === "contact" && width > 541 && (
              <About className="nav__side-text" />
            )}
            {element !== "about" && element !== "contact" && width > 541 && (
              <Contact className="nav__side-text" />
            )}
            {element !== "contact" && width <= 541 && (
              <ContactH className="nav__side-text ct" />
            )}
            {element === "contact" && width <= 541 && (
              <AboutH className="nav__side-text ab" />
            )}
          </Link>
        </div>
        <div className="nav__bottom">
          <div className="nav__bottom-back"></div>
          <Link className="nav__bottom-link" to={bottom.to}>
            {element === "projects" && width > 541 && (
              <HomeH className="nav__bottom-text hm" />
            )}
            {element !== "projects" && (
              <Projects className="nav__bottom-text proj" />
            )}
            {element === "projects" && width <= 541 && (
              <AboutH className="nav__side-text abb" />
            )}
          </Link>
        </div>
      </nav>
    </div>
  )
}
