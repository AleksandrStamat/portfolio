import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import AboutMe from "../AboutMe/AboutMe";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";
import Contsacts from "../Contacts/Contacts";
import PopupContact from "../PopupContact/PopupContact";
import Preloader from "../Preloader/Preloader";

function App() {
  const [isContactPopupOpen, setContactPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  });
  // Открыть ContactPopup
  function handleContactClick() {
    setContactPopupOpen(true);
  }
  function closeAllPopups() {
    setContactPopupOpen(false);
  }
  // закрытие по esc
  function handleEsc(evt) {
    if (evt.key === "Escape") {
      closeAllPopups();
    }
  }

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <Router>
          <Navbar />
          <Hero id="home" />
          <AboutMe id="about-me" />
          <Projects id="portfolio" />
          <Contsacts id="contacts" onContactClick={handleContactClick} />
          <PopupContact isOpen={isContactPopupOpen} onClose={closeAllPopups} />
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
