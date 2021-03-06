import React, { useEffect } from "react";
import "./Projects.css";
import Card from "../Card/Card";
import mesto from "../../image/mesto.png";
import movies from "../../image/movies.png";
import how from "../../image/how.png";
import travel from "../../image/travel.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { options } from "../../utils/constants";

function Projects() {
  useEffect(() => {
    Aos.init(options);
  }, []);
  return (
    <>
      <div className="projects" id="portfolio">
        <h2
          className="projects__title"
          data-aos="fade-right"
          data-aos-once={true}
        >
          Портфолио
        </h2>
        <div className="projects__container">
          <div className="projects__wrapper">
            <ul
              className="projects__items"
              data-aos="fade-left"
              data-aos-once={true}
            >
              <Card src={mesto} text="Mesto" href="https://mesto.astamat.ru/" />
              <Card
                src={movies}
                text="Movies Explorer"
                href="https://movies.astamat.ru/"
              />
            </ul>
            <ul
              className="projects__items"
              data-aos="fade-right"
              data-aos-once={true}
            >
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
