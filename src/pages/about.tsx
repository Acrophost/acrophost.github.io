import React from "react"

import Nav from "../components/nav"

export default function About() {
  const Title = require("../images/who.inline.svg")

  return (
    <div className="page about">
      <Nav
        element="about"
        left={{ to: "/contact/" }}
        right={{ to: "/" }}
        bottom={{ to: "/projects/" }}
      />
      <div className="box about-box">
        <div className="about__image"></div>
        <div className="about__description">
          <Title className="about__title" />
          <p>24 year old frontend developer from Poland</p>
          <p>Passionate about creating esthetic websites and petting dogs</p>
          <p>Currently in search for a job</p>
          <p>
            If you have any interesting opportunities or just want to say hello,
            you can find me here:
          </p>
          <div></div>
          <p>Or use contact page</p>
        </div>
      </div>
    </div>
  )
}
