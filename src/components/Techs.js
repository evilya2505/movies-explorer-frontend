import React from "react";

function Techs(props) {
  return (
    <div className="content__tech-wrapper">
      <section className="tech">
        <h2 className="section-title">
          Технологии
        </h2>
        <div className="section-hl tech__section-hl" />
        <div className="tech__body">
          <h3 className="tech__body-title">7 технологий</h3>
          <p className="tech__body-subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className="tech__table">
            <li className="tech__table-item">HTML</li>
            <li className="tech__table-item">CSS</li>
            <li className="tech__table-item">JS</li>
            <li className="tech__table-item">React</li>
            <li className="tech__table-item">Git</li>
            <li className="tech__table-item">Express.js</li>
            <li className="tech__table-item">mongoDB</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Techs;