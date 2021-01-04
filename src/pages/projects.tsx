import React from "react"

import Nav from "../components/nav"

export default function Projects() {
  const Title = require("../images/projects-title.inline.svg")
  return (
    <div className="page projects">
      <Nav
        element="projects"
        left={{ to: "/about/" }}
        right={{ to: "/contact/" }}
        bottom={{ to: "/" }}
      />
      <div className="box projects-box">
        <Title className="projects__title" />
      </div>
    </div>
  )
}
