import React from "react"

import Nav from "../components/nav"

export default function Projects() {
  return (
    <div className="page projects">
      <Nav
        element="projects"
        left={{ to: "/about/" }}
        right={{ to: "/contact/" }}
        bottom={{ to: "/" }}
      />
      <div className="box projects-box"></div>
    </div>
  )
}
