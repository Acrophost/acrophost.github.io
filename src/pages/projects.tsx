import React from "react"
import { Helmet } from "react-helmet"

import Nav from "../components/nav"

export default function Projects() {
  const ProjImg1 = require("../images/proj1.png")
  const ProjImg2 = require("../images/proj2.png")
  const ProjImg3 = require("../images/proj3.png")

  const Title = require("../images/projects-title.inline.svg")

  console.log(ProjImg1)
  console.log(ProjImg2)
  console.log(ProjImg3)

  const projects = [
    {
      src: ProjImg1,
      alt: "Landing page with a poppy",
      title: "My old portfolio",
      technologies: "Webpack // ReactJS // SCSS",
      live: "https://acrophost.github.io/portfolio1-main-page/",
      code: "https://github.com/Acrophost/portfolio1-main-page",
      empty: 0,
    },
    {
      src: ProjImg3,
      alt: "White square with red deer outline",
      title: "Current portfolio (you're here!)",
      technologies: "Gatsby // ReactJS // TypeScript // SCSS",
      live: "https://acrophost.github.io/",
      code: "https://github.com/Acrophost/portfolio-2",
      empty: 0,
    },
    {
      src: ProjImg2,
      alt: "Page with antique shadows",
      title: "The Antique House",
      technologies: "Create React App // ReactJS // TypeScript // SCSS",
      live: "",
      code: "https://github.com/Acrophost/antique-shop",
      empty: 0,
    },
    {
      src: "",
      alt: "",
      title: "In progress",
      technologies: "There is nothing here yet!",
      live: "",
      code: "",
      empty: 1,
    },
  ]

  let current = 0

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
        <div className="projects__panel">
          {projects.map(function (obj) {
            return (
              <div className="projects__tile">
                {!obj.empty && (
                  <img
                    className="projects__tile-img"
                    src={obj.src}
                    alt={obj.alt}
                  />
                )}
                <div className="projects__tile-overlay">
                  <h3 className="projects__tile-title">{obj.title}</h3>
                  <div className="projects__tile-technologies">
                    {obj.technologies}
                  </div>
                  {!obj.empty && (
                    <div className="projects__tile-links">
                      <a href={obj.live} className="projects__tile-live">
                        See preview
                      </a>
                      <a href={obj.code} className="projects__tile-code">
                        See code
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
