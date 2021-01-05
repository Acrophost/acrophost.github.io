import React from "react"
import { Helmet } from "react-helmet"

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
        <Helmet>
          <meta charSet="utf-8" />
          <title>Anna Piasecka || Portfolio || Projects</title>
        </Helmet>
        <Title className="projects__title" />
      </div>
    </div>
  )
}
