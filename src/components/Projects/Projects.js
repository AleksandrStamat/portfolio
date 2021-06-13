import React, { useEffect } from "react";
import "./Projects.css";
import Card from "../Card/Card";
import mesto from "../../image/mesto.png";
import movies from "../../image/movies.png";
import how from "../../image/how.png";
import travel from "../../image/travel.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div
        className="projects"
        id="portfolio"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <h2 className="projects__title">Portfolio</h2>
        <div className="projects__container">
          <div className="projects__wrapper">
            <ul className="projects__items">
              <Card
                src={mesto}
                text="Mesto"
                href="https://mesto.stamat.nomoredomains.club"
              />
              <Card
                src={movies}
                text="Movies Explorer"
                href="https://movies.stamat.nomoredomains.icu/"
              />
            </ul>
            <ul className="projects__items">
              <Card
                src={how}
                text="How-to-learn"
                href="https://aleksandrstamat.github.io/how-to-learn/"
              />
              <Card
                src={travel}
                text="Russian-Travel"
                href="https://aleksandrstamat.github.io/russian-travel/index.html"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
