import React, { useEffect } from "react";
import foto2 from "../../image/foto2.jpeg";
import "./AboutMe.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { options } from '../../utils/constants'


function AboutMe() {
  useEffect(() => {
    Aos.init(options);
  }, []);
  return (
    <>
      <section id="about-me" className="about-me">
        <div className="about-me__container">
          <h2 className="about-me__title" data-aos="fade-left">
            About Me
          </h2>
          <p className="about-me__name" data-aos="fade-right">
            Александр
          </p>
          <p className="about-me__profession" data-aos="fade-right">
            Начинающий фронтенд-разработчик, 24 года
          </p>
          <p className="about-me__text" data-aos="fade-right">
            Живу в Москве. Всегда пытался найти себя, пробовал себя во многих
            сферах, но понимал, что это не моё. После того, как прошёл курс по
            веб-разработке, начал заниматься фриланс-заказами и понял, что мне
            нравится именно это. Всегда довожу дело до конца, нахожу подход к
            каждому человеку. Люблю хорошее и стоящее кино, отдельно хочу
            отметить научные фильмы про космос. В свободное время также катаюсь
            на лонгборде, слушая любимые треки. Люблю Антоху МС и Хлеб.
          </p>
          <img
            src={foto2}
            alt="Фотография создателя."
            className="about-me__foto"
            data-aos="fade-left"
          />
        </div>
      </section>
    </>
  );
}

export default AboutMe;
