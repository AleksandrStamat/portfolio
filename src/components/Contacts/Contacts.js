import React, { useEffect } from "react";
import "./Contacts.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { options } from '../../utils/constants'
function Contacts({ onContactClick }) {
  useEffect(() => {
    Aos.init(options);
  }, []);
  return (
    <>
      <section className="contacts" id="contacts">
        <h2 className="contacts__title" data-aos="zoom-in">
          Сontacts
        </h2>
        <div className="contacts__container">
          <div className="contacts__wrapper" data-aos="fade-right">
            <p className="contacts__heading">
              To contact me, please use the contact form.
            </p>
            <p className="contacts__text">
              E-mail:
              <span className="contacts__span">stamat.aleksandr@yandex.ru</span>
            </p>
            <p className="contacts__text">
              Tel: <span className="contacts__span">+7(926)886-21-38</span>
            </p>
          </div>
          <button
            className="contacts__button"
            onClick={onContactClick}
            data-aos="fade-left"
          >
            Let's talk
          </button>
        </div>
      </section>
    </>
  );
}

export default Contacts;
