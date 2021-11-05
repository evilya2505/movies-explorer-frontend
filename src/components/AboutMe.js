import React from "react";
import studentPath from '../images/student.png';

function AboutMe({children}) {
  return (
    <section className="student">
      <h2 className="section-title">
        Студент
      </h2>
      <div className="section-hl student__section-hl" />

      <div className="student__info">
        <div className="student__info-text">
          <div className="student__info-about">
            <h3 className="student__info-title">Виталий</h3>
            <p className="student__info-subtitle">Фронтенд-разработчик, 30 лет</p>
            <p className="student__info-description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          </div>

          <ul className="student__info-sns">
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/" className="student__info-link">Facebook</a>
            <a target="_blank" rel="noreferrer" href="https://github.com/" className="student__info-link">Github</a>
          </ul>
        </div>

        <img src={studentPath} alt="изображение студента" className="student__info-img" />
      </div>
      {children}
    </section>
  )
}

export default AboutMe;