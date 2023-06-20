import React, { useState } from "react";
import { Nav, Navbar, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const [filter, setFilter] = useState("*"); // set the default filter to show all

  const handleFilterClick = (filter) => {
    setFilter(filter);
  };

  return (
    <>
      <section id="portfolio" className="portfolio section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>
              Améliorer le SHOW/HIDE trop brusque ici, ajouter des carouselss
            </p>
          </div>

          <div className="row" data-aos="fade-down">
            <div className="col-lg-12 d-flex justify-content-center">
              <Navbar id="portfolio-flters">
                <Nav>
                  <Nav.Link
                    data-filter="*"
                    onClick={() => handleFilterClick("*")}
                  >
                    Tout
                  </Nav.Link>
                  <Nav.Link
                    data-filter=".filter-console"
                    onClick={() => handleFilterClick(".filter-console")}
                  >
                    Console
                  </Nav.Link>
                  <Nav.Link
                    data-filter=".filter-app"
                    onClick={() => handleFilterClick(".filter-app")}
                  >
                    Jeu
                  </Nav.Link>
                  <Nav.Link
                    data-filter=".filter-mobile"
                    onClick={() => handleFilterClick(".filter-mobile")}
                  >
                    Mobile
                  </Nav.Link>
                  <Nav.Link
                    data-filter=".filter-web"
                    onClick={() => handleFilterClick(".filter-web")}
                  >
                    Web
                  </Nav.Link>
                </Nav>
              </Navbar>
            </div>
          </div>

          <div className="row portfolio-container" data-aos="zoom-out">
            {projets.map((projet, index) => (
              <Element
                key={index}
                data={projet}
                show={projet.filter === filter || filter === "*" ? "show" : ""}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Element({ data, show }) {
  return (
    <div className={`col-lg-4 col-md-6 portfolio-item ${data.filter} ${show}`}>
      <div className="portfolio-wrap">
        <Carousel controls={false} interval={2000} indicators={false}>
          {data.imgPath.map((path) => (
            <Carousel.Item>
              <img src={path} className="img-fluid" alt="" />
            </Carousel.Item>
          ))}
        </Carousel>
        <Link to={data.link}>
          <div className="portfolio-links p-5">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

const projets = [
  {
    title: "Robot turtle",
    description: [
      "Projet académique en Java, création d'un plateau de jeu vidéo",
    ],
    imgPath: ["img/projects/robot_turtle_1.jpg"],
    filter: ".filter-app",
    link: "RobotTurtle",
  },
  {
    title: "Jarvis",
    description: "description",
    imgPath: ["img/portfolio/portfolio-1.jpg"],
    filter: ".filter-app",
    link: "Jarvis",
  },
  {
    title: "HomeChef",
    description: "description",
    imgPath: ["img/portfolio/portfolio-1.jpg"],
    filter: ".filter-app",
    link: "HomeChef",
  },
];
