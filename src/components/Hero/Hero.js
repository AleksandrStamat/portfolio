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
        <img className="hero-foto" alt="by Akin" src={foto} />
        <h1 className="hero-title">Hello, I'm Aleksandr</h1>
        <Typed
          className="hero-text"
          strings={["Front-End Developer", "Web Designer"]}
          typeSpeed={70}
          backSpeed={60}
          loop
        />
      </div>
    </>
  );
}

export default Hero;
