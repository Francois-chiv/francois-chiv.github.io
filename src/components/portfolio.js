import React, { useState } from 'react';

const elements = [
  {
    imgPath: "img/portfolio/portfolio-1.jpg",
    filter: ".filter-app",
    link: "google.com",
  }, {
    imgPath: "img/portfolio/portfolio-1.jpg",
    filter: ".filter-web",
    link: "google.com",
  }, {
    imgPath: "img/portfolio/portfolio-1.jpg",
    filter: ".filter-console",
    link: "google.com",
  }, {
    imgPath: "img/portfolio/portfolio-1.jpg",
    filter: ".filter-app",
    link: "google.com",
  }, {
    imgPath: "img/portfolio/portfolio-1.jpg",
    filter: ".filter-app",
    link: "google.com",
  }, {
    imgPath: "img/portfolio/portfolio-1.jpg",
    filter: ".filter-app",
    link: "google.com",
  }
];

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
            <p>Améliorer le SHOW/HIDE trop brusque ici, ajouter une description on hover</p>
          </div>

          <div className="row" data-aos="fade-down">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" onClick={() => handleFilterClick("*")}>
                  All
                </li>
                <li data-filter=".filter-app" onClick={() => handleFilterClick(".filter-app")}>
                  Jeu
                </li>
                <li data-filter=".filter-web" onClick={() => handleFilterClick(".filter-web")}>
                  Web
                </li>
                <li data-filter=".filter-mobile" onClick={() => handleFilterClick(".filter-mobile")}>
                  Mobile
                </li>
                <li data-filter=".filter-console" onClick={() => handleFilterClick(".filter-console")}>
                  Console
                </li>
              </ul>
            </div>
          </div>

          <div className="row portfolio-container" data-aos="fade-up">
            {elements.map((element, index) => (
              <Element
                key={index}
                {...element}
                show={element.filter === filter || filter === "*" ? "show" : "d-none"}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

function Element({ imgPath, filter, link, show}) {
  return (
    <div className={`col-lg-4 col-md-6 portfolio-item ${filter} ${show}`}>
      <div className="portfolio-wrap">
        <img src={imgPath} className="img-fluid" alt="" />
        <div className="portfolio-links">
          <a href={link} title="More Details">More details</a>
        </div>
      </div>
    </div>
  );
}