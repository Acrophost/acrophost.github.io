import React from "react"
import { Helmet } from "react-helmet"

import Nav from "../components/nav"

export default class Contact extends React.Component<
  {},
  { name: string; mail: string; text: string }
> {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      mail: "",
      text: "",
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeMail = this.handleChangeMail.bind(this)
    this.handleChangeText = this.handleChangeText.bind(this)
  }

  handleSubmit = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
  }

  handleChangeName = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
    const target = e.target as HTMLInputElement
    this.setState({ name: target.value })
  }

  handleChangeMail = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
    const target = e.target as HTMLInputElement
    this.setState({ mail: target.value })
  }

  handleChangeText = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
    const target = e.target as HTMLTextAreaElement
    this.setState({ text: target.value })
  }

  render() {
    const Title = require("../images/contact-title.inline.svg")
    const Phone = require("../images/smartphone.inline.svg")
    const Mail = require("../images/message.inline.svg")
    const LinkedIn = require("../images/linkedin.inline.svg")
    const Git = require("../images/github.inline.svg")

    return (
      <div className="page contact">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Anna Piasecka || Portfolio || Contact</title>
        </Helmet>
        <Nav
          element="contact"
          left={{ to: "/" }}
          right={{ to: "/about/" }}
          bottom={{ to: "/projects/" }}
        />
        <div className="box contact-box">
          <Title className="contact__title" />
          <div className="contact__text">
            <p>Have any interesting opportunities for me? Want to see my CV?</p>
            <p>Any questions? Or just want to say hello?</p>
            <p>Don't hesitate to contact me :)</p>
            <div className="contact__text-sm">
              <a
                title="call me"
                href="callto://+48514397103"
                className="contact__sm"
              >
                <Phone className="icon" />
                <span>+48 514 397 103</span>
              </a>
              <a
                title="mail me"
                href="mailto:anna.piasecka133@gmail.com"
                className="contact__sm"
              >
                <Mail className="icon" />
                <span>anna.piasecka133@gmail.com</span>
              </a>
              <a
                title="follow me on linkedin"
                href="https://www.linkedin.com/in/anna-piasecka-651119183/"
                className="contact__sm"
              >
                <LinkedIn className="icon lin" />
                <span>LinkedIn - Anna Piasecka</span>
              </a>
              <a
                title="see my projects"
                href="https://github.com/Acrophost"
                className="contact__sm"
              >
                <Git className="icon lin" />
                <span>GitHub - Acrophost</span>
              </a>
            </div>
          </div>
          <div className="contact__form">
            <div className="contact__form-border"></div>
            <h3>Let's work together!</h3>
            <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
              <input
                type="text"
                className="contact__form-field"
                name="name"
                placeholder="Your name"
                value={this.state.name}
                onChange={this.handleChangeName}
              />
              <input
                type="email"
                className="contact__form-field"
                aria-describedby="emailHelp"
                name="mail"
                placeholder="Your e-mail address"
                value={this.state.mail}
                onChange={this.handleChangeMail}
              />
              <textarea
                className="contact__form-field"
                rows={5}
                name="text"
                placeholder="Say hello!"
                defaultValue={this.state.text}
                onChange={this.handleChangeText}
              />
              <button type="submit" className="contact__form-submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
