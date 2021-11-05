import React from "react";
import arrowPath from '../images/arrrow.svg';

function Portfolio(props) {
  return (
    <div className="student__portfolio">
      <h3 className="student__portfolio-title">Портфолио</h3>

      <ul className="student__portfolio-list">
        <li className="student__portfolio-item">
          <a target="_blank" rel="noreferrer" href="https://evilya2505.github.io/how-to-learn/" className="student__portfolio-item-link">
            Статичный сайт

            <img src={arrowPath} alt="изображение стрелки" className="student__portfolio-item-img" />
          </a>
        </li>
        <li className="student__portfolio-item">
          <a target="_blank" rel="noreferrer" href="https://evilya2505.github.io/russian-travel/" className="student__portfolio-item-link">
            Адаптивный сайт

            <img src={arrowPath} alt="изображение стрелки" className="student__portfolio-item-img" />
          </a>
        </li>
        <li className="student__portfolio-item">
          <a target="_blank" rel="noreferrer" href="https://github.com/evilya2505/react-mesto-api-full" className="student__portfolio-item-link">
            Одностраничное приложение

            <img src={arrowPath} alt="изображение стрелки" className="student__portfolio-item-img" />
          </a>
        </li>
      </ul>

    </div>
  )
}

export default Portfolio;