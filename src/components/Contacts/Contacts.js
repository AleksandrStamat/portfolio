import React from "react";
import "./Contacts.css";

function Contacts({ onContactClick }) {
  return (
    <>
      <section className="contacts" id="contacts">
        <h2 className="contacts__title">Сontacts</h2>
        <div className="contacts__container">
          <div className="contacts__wrapper">
            <p className="contacts__heading">
              To contact me, please use the contact form.
            </p>
            <p className="contacts__text">
              E-mail:{" "}
              <span className="contacts__span">stamat.aleksandr@yandex.ru</span>
            </p>
            <p className="contacts__text">
              Tel: <span className="contacts__span">+7(926)886-21-38</span>
            </p>
          </div>
          <button className="contacts__button" onClick={onContactClick}>
            Let's talk
          </button>
        </div>
      </section>
    </>
  );
}

export default Contacts;
