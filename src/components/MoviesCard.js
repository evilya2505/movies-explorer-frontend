import React from "react";
import { Route, Switch } from 'react-router-dom';

function MoviesCard({ name, duration, image }) {
  const [isSaved, setIsSaved] = React.useState(false);

  function handleLikeBtn() {
    setIsSaved((prevState) => {
      setIsSaved(!prevState);
    });
  }

  return (
    <li className="card cards__card">
      <div className="card__info">
        <h3 className="card__title">{name}</h3>
        <p className="card__subtitle">{duration}</p>
        <Switch>
          <Route exact path='/movies'>
            <button className={isSaved ? 'card__like-btn card__like-btn_type_saved' : 'card__like-btn'} onClick={handleLikeBtn}/>
          </Route>

          <Route exact path='/saved-movies'>
            <button className="card__like-btn card__like-btn_type_delete"/>
          </Route>
        </Switch>
      </div>
      <img alt="обложка фильма" className="card__img" src={image} />
    </li>
  )
}

export default MoviesCard;