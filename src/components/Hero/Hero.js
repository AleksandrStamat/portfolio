import React from "react";
import Typed from "react-typed";
import "./Hero.css";
import foto from "../../image/foto.jpeg";

function Hero() {
  return (
    <>
      <div className="hero-container" id="home">
        <img className="hero-foto" alt="Александр" src={foto} />
        <h1 className="hero-title">Привет, Я Александр</h1>
        <Typed
          className="hero-text"
          strings={["Веб-Разработчик", "Веб-Дизайнер"]}
          typeSpeed={60}
          backSpeed={60}
          loop
        />
      </div>
    </>
  );
}

export default Hero;
