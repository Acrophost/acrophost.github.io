import React from "react"
import { Helmet } from "react-helmet"

import Nav from "../components/nav"

export default function Projects() {
  const ProjImg1 = require("../images/proj1.svg")
  const ProjImg2 = require("../images/proj2.svg")
  const ProjImg3 = require("../images/proj3.svg")

  const Title = require("../images/projects-title.inline.svg")

  console.log(ProjImg1)
  console.log(ProjImg2)
  console.log(ProjImg3)

  const projects = [
    {
      key: 0,
      src: ProjImg1,
      alt: "Landing page with a poppy",
      title: "My old portfolio",
      technologies: "Webpack // ReactJS // SCSS",
      live: "https://acrophost.github.io/portfolio1-main-page/",
      code: "https://github.com/Acrophost/portfolio1-main-page",
      empty: 0,
    },
    {
      key: 1,
      src: ProjImg3,
      alt: "White square with red deer outline",
      title: "Current portfolio",
      technologies: "Gatsby // ReactJS // TypeScript // SCSS",
      live: "https://acrophost.github.io/",
      code: "https://github.com/Acrophost/portfolio-2",
      empty: 0,
    },
    {
      key: 2,
      src: ProjImg2,
      alt: "Page with antique shadows",
      title: "The Antique House",
      technologies: "Create React App // ReactJS // TypeScript // SCSS",
      live: "https://acrophost.github.io/antique-shop/",
      code: "https://github.com/Acrophost/antique-shop",
      empty: 0,
    },
    {
      key: 3,
      src: "",
      alt: "",
      title: "In progress",
      technologies: "Stay tuned for more! :)",
      live: "",
      code: "",
      empty: 1,
    },
  ]

  return (
    <div className="page projects">
      <Nav element="projects" />
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
                  <div className="projects__tile-box">
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
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
