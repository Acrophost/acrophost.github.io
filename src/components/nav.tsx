import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import gsap from "gsap"

export default class Nav extends React.Component<
  {
    element: string
    leftS: { to: string }
    rightS: { to: string }
    bottomS: { to: string }
    left: { to: string }
    right: { to: string }
    bottom: { to: string }
  },
  {
    width: number
  }
> {
  constructor(props) {
    super(props)

    this.state = { width: 0 }

    this.animateRightOut = this.animateRightOut.bind(this)
    this.animateLeftOut = this.animateLeftOut.bind(this)
    this.animateTopOut = this.animateTopOut.bind(this)
    this.animateLeftIn = this.animateLeftIn.bind(this)
    this.animateRightIn = this.animateRightIn.bind(this)
    this.animateBottomIn = this.animateBottomIn.bind(this)
  }

  componentDidMount() {
    this.setState({
      width:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth,
    })
  }

  animateRightOut() {
    const t1 = gsap.timeline()
    t1.to(".box", { duration: 1.5, x: 3500, opacity: 0 })
  }

  animateLeftOut() {
    const t1 = gsap.timeline()
    t1.to(".box", { duration: 1.5, x: -3500, opacity: 0 })
  }

  animateTopOut() {
    const t1 = gsap.timeline()
    t1.to(".box", { duration: 1.5, y: -2000, opacity: 0 })
  }

  animateLeftIn(node) {
    return gsap.from(node.querySelectorAll(".box"), {
      opacity: 0,
      x: -3500,
    })
  }

  animateRightIn(node) {
    return gsap.from(node.querySelectorAll(".box"), {
      opacity: 0,
      x: 3500,
    })
  }

  animateBottomIn(node) {
    return gsap.from(node.querySelectorAll(".box"), {
      opacity: 0,
      y: 2000,
    })
  }

  About = require("../images/about.inline.svg")
  AboutH = require("../images/about-horizontal.inline.svg")
  Contact = require("../images/contact.inline.svg")
  ContactH = require("../images/contact-horizontal.inline.svg")
  Home = require("../images/home.inline.svg")
  HomeH = require("../images/home-horizont.inline.svg")
  Projects = require("../images/projects.inline.svg")

  toggleNav = () => {
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
  render() {
    return (
      <div>
        <button className="nav__button" onClick={this.toggleNav.bind(this)}>
          <div className="nav__button-border"></div>
          <div className="nav__burger-box">
            <div className="nav__burger"></div>
          </div>
        </button>
        <nav className="nav">
          <div className="nav__left">
            <div className="nav__left-back"></div>
            <TransitionLink
              className="nav__left-link"
              to={
                this.state.width > 541
                  ? this.props.left.to
                  : this.props.leftS.to
              }
              exit={{
                trigger: ({ exit, e, node }) => this.animateRightOut(),
                length: 1.5,
              }}
              entry={{
                trigger: ({ entry, node }) => this.animateLeftIn(node),
                length: 1.5,
                delay: 0.5,
              }}
            >
              {this.props.element === "about" && this.state.width > 541 && (
                <this.Contact className="nav__side-text" />
              )}
              {this.props.element === "contact" && this.state.width > 541 && (
                <this.Home className="nav__side-text" />
              )}
              {this.props.element !== "about" &&
                this.props.element !== "contact" &&
                this.state.width > 541 && (
                  <this.About className="nav__side-text" />
                )}
              {this.props.element !== "about" &&
                this.props.element !== "contact" &&
                this.props.element !== "projects" &&
                this.state.width <= 541 && (
                  <this.AboutH className="nav__side-text ab" />
                )}
              {(this.props.element === "about" ||
                this.props.element === "contact" ||
                this.props.element === "projects") &&
                this.state.width <= 541 && (
                  <this.HomeH className="nav__side-text hm" />
                )}
            </TransitionLink>
          </div>
          <div className="nav__right">
            <div className="nav__right-back"></div>
            <TransitionLink
              className="nav__right-link"
              to={
                this.state.width > 541
                  ? this.props.right.to
                  : this.props.rightS.to
              }
              exit={{
                trigger: ({ exit, node }) => this.animateLeftOut(),
                length: 1.5,
              }}
              entry={{
                trigger: ({ entry, node }) => this.animateRightIn(node),
                length: 1.5,
                delay: 0.5,
              }}
            >
              {this.props.element === "about" && this.state.width > 541 && (
                <this.Home className="nav__side-text" />
              )}
              {this.props.element === "contact" && this.state.width > 541 && (
                <this.About className="nav__side-text" />
              )}
              {this.props.element !== "about" &&
                this.props.element !== "contact" &&
                this.state.width > 541 && (
                  <this.Contact className="nav__side-text" />
                )}
              {this.props.element !== "contact" && this.state.width <= 541 && (
                <this.ContactH className="nav__side-text ct" />
              )}
              {this.props.element === "contact" && this.state.width <= 541 && (
                <this.AboutH className="nav__side-text ab" />
              )}
            </TransitionLink>
          </div>
          <div className="nav__bottom">
            <div className="nav__bottom-back"></div>
            <TransitionLink
              className="nav__bottom-link"
              to={
                this.state.width > 541
                  ? this.props.bottom.to
                  : this.props.bottomS.to
              }
              exit={{
                trigger: ({ exit, node }) => this.animateTopOut(),
                length: 1.5,
              }}
              entry={{
                trigger: ({ entry, node }) => this.animateBottomIn(node),
                length: 1.5,
                delay: 0.4,
              }}
            >
              {this.props.element === "projects" && this.state.width > 541 && (
                <this.HomeH className="nav__bottom-text hm" />
              )}
              {this.props.element !== "projects" && (
                <this.Projects className="nav__bottom-text proj" />
              )}
              {this.props.element === "projects" && this.state.width <= 541 && (
                <this.AboutH className="nav__side-text abb" />
              )}
            </TransitionLink>
          </div>
        </nav>
      </div>
    )
  }
}
