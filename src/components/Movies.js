import React from "react";
import MoviesCard from "./MoviesCard";
import Preloader from "./Preloader";

function Movies(props) {
  return (
    <>
      <section className="cards content__cards">
        {/* <Preloader /> */}
        <ul className="cards__list">
          <MoviesCard id="1" name="33 слова о дизайне" duration="1ч 42м" image="https://i.imgur.com/r0OTElq.png" />

          <MoviesCard id="2" name="Киноальманах «100 лет дизайна»" duration="1ч 42м" image="https://i.imgur.com/vh49ODg.png" />

          <MoviesCard id="3" name="В погоне за Бенкси" duration="1ч 42м" image="https://i.imgur.com/CTt6uuI.png" />

          <MoviesCard id="4" name="Бег это свобода" duration="1ч 42м" image="https://i.imgur.com/1nCyZiP.png" />

          <MoviesCard id="5" name="Книготорговцы" duration="1ч 42м" image="https://i.imgur.com/nZbvNdR.png" />

          <MoviesCard id="6" name="Когда я думаю о Германии ночью" duration="1ч 42м" image="https://i.imgur.com/HNLvooU.png" />
        </ul>

        <button className="cards__more-btn">Ещё</button>
      </section>
    </>
  )
}

export default Movies;