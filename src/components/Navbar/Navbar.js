import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../../image/logo.svg";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const scrollToTop = () => scroll.scrollToTop();
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={scrollToTop}
          />
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-items active" : "nav-items"}>
            <li className="nav-item">
              <Link
                className="nav-links"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-links"
                activeClass="active"
                to="about-me"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                onClick={closeMobileMenu}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-links"
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-160}
                duration={500}
                onClick={closeMobileMenu}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-links"
                activeClass="active"
                to="contacts"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                onClick={closeMobileMenu}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
