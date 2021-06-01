import React from "react";
import "./Card.css";

function Card({ href, label, src, text }) {
  return (
    <>
      <li className="card">
        <a className="card__link" href={href} target="blank">
          <figure className="card__pic-wrap" data-category={label}>
            <img className="card__img" alt="Foto" src={src} />
          </figure>
          <div className="card__info">
            <h5 className="card__text">{text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default Card;
