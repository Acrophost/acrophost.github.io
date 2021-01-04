import React from "react"

import Nav from "../components/nav"

export default function About() {
  const Title = require("../images/about-title.inline.svg")

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
          <p>
            My name is Anna Piasecka and I'm a 24 year old Front-end developer
            from Poland.
          </p>
          <p>
            I'm passionate about creating esthetic websites and petting cute
            dogs.
          </p>
          <div className="about__technologies">
            <h3>What can I work with?</h3>
            <p>HTML</p>
            <p>CSS</p>
            <p>SASS</p>
            <p>JS</p>
            <p>ReactJS</p>
            <p>Redux</p>
            <p>Webpack</p>
            <p>Adobe Photoshop</p>
            <p>Adobe Illustrator</p>
            <p>Git</p>
          </div>
        </div>
      </div>
    </div>
  )
}