import React from "react"
import Helmet from "react-helmet"

import Nav from "../components/nav"

const Home = () => {
  const Deer = require("../images/home-deer.inline.svg")

  const NavProps = {
    leftS: { to: "/about/" },
    rightS: { to: "/contact/" },
    bottomS: { to: "/projects/" },
    left: { to: "/about/" },
    right: { to: "/contact/" },
    bottom: { to: "/projects/" },
  }

  return (
    <div className="page home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Anna Piasecka || Portfolio</title>
      </Helmet>
      <Nav
        element="home"
        leftS={NavProps.leftS}
        rightS={NavProps.rightS}
        bottomS={NavProps.bottomS}
        left={NavProps.left}
        right={NavProps.right}
        bottom={NavProps.bottom}
      />
      <div className="box home-box">
        <Deer className="home__deer" />
      </div>
    </div>
  )
}

export default Home
