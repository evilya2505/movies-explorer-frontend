import React from "react";

function Footer(props) {
  return(
    <footer className="footer">
      <p className="footer__credits">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="section-hl section-hl_type_gray"></div>
      <div className="footer__bottom-section">
        <p className="footer__year">&copy; 2020</p>

        <ul className="footer__sns-list">
          <li className="footer__sns-list-item">
            <a target="_blank" rel="noreferrer" href="https://practicum.yandex.ru/" className="footer__sns-list-link">
              Яндекс.Практикум
            </a>
          </li>

          <li className="footer__sns-list-item">
            <a target="_blank" rel="noreferrer" href="https://github.com/" className="footer__sns-list-link">
              Github
            </a>
          </li>

          <li className="footer__sns-list-item">
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/" className="footer__sns-list-link">
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;