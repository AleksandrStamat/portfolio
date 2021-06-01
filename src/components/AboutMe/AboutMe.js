import React from "react";
import foto2 from "../../image/foto2.jpeg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <>
      <section id="about-me" className="about-me">
        <div className="about-me__container">
          <h2 className="about-me__title">Обо мне</h2>
          <p className="about-me__name">Александр</p>
          <p className="about-me__profession">
            Начинающий фронтенд-разработчик, 24 года
          </p>
          <p className="about-me__text">
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
          />
        </div>
      </section>
    </>
  );
}

export default AboutMe;
