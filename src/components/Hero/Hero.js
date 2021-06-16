import React from "react";
import Typed from "react-typed";
import "../App/App.css";
import "./Hero.css";
// import video from "../../video/video.mp4";
import foto from "../../image/foto.jpeg";

function Hero() {
  return (
    <>
      {/* <video className="hero-video" src={video} autoPlay loop muted /> */}
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
