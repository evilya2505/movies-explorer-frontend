import React from "react";

function AboutProject(props) {
  return (
    <section className="about content__about" id="about-project">
      <h2 className="section-title">
        О проекте
      </h2>
      <div className="section-hl about__section-hl" />
      <ul className="about__info">
        <li className="about__info-item">
          <h3 className="about__info-title">Дипломный проект включал 5 проектов</h3>
          <p className="about__info-subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>

        <li className="about__info-item">
          <h3 className="about__info-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about__info-subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>

      <ul className="about__scale">
        <li className="about__scale-item">
          <p className="about__scale-title about__scale-title_type_black">1 неделя</p>
          <p className="about__scale-subtitle">Back-end</p>
        </li>

        <li className="about__scale-item">
          <p className="about__scale-title about__scale-title_type_gray">4 неделя</p>
          <p className="about__scale-subtitle">Front-end</p>
        </li>
      </ul>
    </section>
  )
}

export default AboutProject;