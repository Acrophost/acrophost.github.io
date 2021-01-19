import React from "react"
import { Helmet } from "react-helmet"

import Nav from "../components/nav"

export default function Home() {
  const Deer = require("../images/home-deer.inline.svg")

  return (
    <div className="page home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Anna Piasecka || Portfolio</title>
      </Helmet>
      <Nav element="home" />
      <div className="box home-box">
        <Deer className="home__deer" />
      </div>
    </div>
  )
}
