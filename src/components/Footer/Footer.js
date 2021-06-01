import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <section className="footer-social">
          <div className="footer-social-wrap">
            <div className="footer-text">
              <p className="footer-copyright">
                © 2021 Made with React by Aleksandr Stamat
              </p>
            </div>
            <div className="footer-icons">
              <a
                className="footer-icon-link"
                href="https://www.facebook.com/stamat.aleksandr"
                target="blank"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="footer-icon-link"
                href="https://www.instagram.com/a_stamat/"
                target="blank"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                className="footer-icon-link"
                href="https://github.com/AleksandrStamat"
                target="blank"
                aria-label="Github"
              >
                <i className="fab fa-github" />
              </a>
              <a
                className="footer-icon-link"
                href="https://t.me/a_stamat"
                target="blank"
                aria-label="Telegram"
              >
                <i className="fab fa-telegram" />
              </a>
              <a
                className="footer-icon-link"
                href="https://vk.com/a_stamat"
                target="blank"
                aria-label="Vk"
              >
                <i className="fab fa-vk" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Footer;
