import React from "react";
import MoviesCard from "./MoviesCard";

function SavedMovies(props) {
  return (
    <section className="cards content__cards">
      <ul className="cards__list">
      <MoviesCard id="1" name="33 слова о дизайне" duration="1ч 42м" image="https://i.imgur.com/r0OTElq.png" />

      <MoviesCard id="2" name="Киноальманах «100 лет дизайна»" duration="1ч 42м" image="https://i.imgur.com/vh49ODg.png" />

      <MoviesCard id="3" name="В погоне за Бенкси" duration="1ч 42м" image="https://i.imgur.com/CTt6uuI.png" />
      </ul>
    </section>
  )
}

export default SavedMovies;