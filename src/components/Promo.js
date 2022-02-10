import React from "react";
import promoPath from '../images/lead-image.png';

function Promo(props) {
  return (
    <div className="content__lead-wrapper">
      <section className="lead content__lead">
        <div className="lead__text">
          <h1 className="lead__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <p className="lead__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a href="#about-project" className="lead__link">Узнать больше</a>
        </div>
        <img src={promoPath} alt="изображение promo" className="lead__img" />
      </section>
    </div>
  )
}

export default Promo;