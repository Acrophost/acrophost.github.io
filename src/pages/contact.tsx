import React from "react"

import Nav from "../components/nav"

export default function Contact() {
  return (
    <div className="page contact">
      <Nav
        element="contact"
        left={{ to: "/" }}
        right={{ to: "/about/" }}
        bottom={{ to: "/projects/" }}
      />
      <div className="box contact-box"></div>
    </div>
  )
}
