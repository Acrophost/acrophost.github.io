import React from "react"
import { Link } from "gatsby"

export default class Nav extends React.Component<
  {
    element: string
  },
  {
    width: number
    left: { to: string }
    right: { to: string }
    bottom: { to: string }
  }
> {
  constructor(props) {
    super(props)

    this.state = {
      width: 0,
      left: { to: "" },
      right: { to: "" },
      bottom: { to: "" },
    }
  }

  componentDidMount() {
    this.setState({
      width:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth,
    })

    if (this.props.element === "home") {
      this.setState({
        left: { to: "/about/" },
        right: { to: "/contact/" },
        bottom: { to: "/projects/" },
      })
    }

    if (this.state.width > 541) {
      switch (this.props.element) {
        case "about":
          this.setState({
            left: { to: "/contact/" },
            right: { to: "/" },
            bottom: { to: "/projects/" },
          })
          return
        case "contact":
          this.setState({
            left: { to: "/" },
            right: { to: "/about/" },
            bottom: { to: "/projects/" },
          })
          return
        case "projects":
          this.setState({
            left: { to: "/about/" },
            right: { to: "/contact/" },
            bottom: { to: "/" },
          })
          return
        default:
          return
      }
    } else {
      switch (this.props.element) {
        case "about":
          this.setState({
            left: { to: "/" },
            right: { to: "/contact/" },
            bottom: { to: "/projects/" },
          })
          return
        case "contact":
          this.setState({
            left: { to: "/" },
            right: { to: "/about/" },
            bottom: { to: "/projects/" },
          })
          return
        case "projects":
          this.setState({
            left: { to: "/" },
            right: { to: "/contact/" },
            bottom: { to: "/about/" },
          })
          return
        default:
          return
      }
    }
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
            <Link className="nav__left-link" to={this.props.left.to}>
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
            </Link>
          </div>
          <div className="nav__right">
            <div className="nav__right-back"></div>
            <Link className="nav__right-link" to={this.props.right.to}>
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
            </Link>
          </div>
          <div className="nav__bottom">
            <div className="nav__bottom-back"></div>
            <Link className="nav__bottom-link" to={this.props.bottom.to}>
              {this.props.element === "projects" && this.state.width > 541 && (
                <this.HomeH className="nav__bottom-text hm" />
              )}
              {this.props.element !== "projects" && (
                <this.Projects className="nav__bottom-text proj" />
              )}
              {this.props.element === "projects" && this.state.width <= 541 && (
                <this.AboutH className="nav__side-text abb" />
              )}
            </Link>
          </div>
        </nav>
      </div>
    )
  }
}
