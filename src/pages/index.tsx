import React from "react"

import Nav from "../components/nav"

export default function Home() {
  const Deer = require("../images/deer.inline.svg")
  const Title = require("../images/name.inline.svg")

  return (
    <div className="page home">
      <Nav
        element="home"
        left={{ to: "/about/" }}
        right={{ to: "/contact/" }}
        bottom={{ to: "/projects/" }}
      />
      <div className="box home-box">
        <div className="home__deer-bg"></div>
        <div className="home__deer-bg-border"></div>
        <div className="home__deer-container">
          <div className="home__deer-box">
            <Deer className="home__deer" />
          </div>
        </div>
        <Title className="home__title" />
      </div>
    </div>
  )
}
