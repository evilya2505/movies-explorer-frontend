import React from "react";
import { Route, Switch } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function MoviesCard({ film, name, duration, handleLikeBtnClick, savedMovie, handleDeleteBtnClick }) {
  // Подписывание компонента CurrentUserContext и получение значение контекста
  const currentUser = React.useContext(CurrentUserContext);
  const [isSaved, setIsSaved] = React.useState(false);

  React.useEffect(() => {
    // Если существует сохраненный фильм - true, если нет - false.
    (savedMovie?.length > 0 ? setIsSaved(true): setIsSaved(false));
  }, [savedMovie, currentUser]);

  // Обработчик нажатия по кнопке лайка
  function handleLikeBtn() {
    // Если фильм не сохранен -> сохранить, если сохранен -> удалить из сохраненных
    (!isSaved ? handleLikeBtnClick(film) : handleDeleteBtnClick(savedMovie[0]));
  }

  // Обработчик нажатия по кнопке удаления
  function handleDeleteBtn() {
    handleDeleteBtnClick(film);
  }

  return (
    <li className="card cards__card">
      <div className="card__info">
        <h3 className="card__title">{name}</h3>
        <p className="card__subtitle">
          {`${Math.floor(duration/60)}ч ${duration - Math.floor(duration/60)*60}м`}
        </p>

        <Switch>
          <Route exact path='/movies'>
            <button
              className={isSaved ? 'card__like-btn card__like-btn_type_saved' : 'card__like-btn'} onClick={handleLikeBtn} />
          </Route>

          <Route exact path='/saved-movies'>
            <button
              className="card__like-btn card__like-btn_type_delete"
              onClick={handleDeleteBtn} />
          </Route>
        </Switch>

      </div>
      <a
        href={film.trailerLink || film.trailer}
        rel="noreferrer"
        target="_blank">
          <img
            alt="обложка фильма"
            className="card__img"
            src={film.image.url
              ? `https://api.nomoreparties.co${film.image.url}`
              : film.image} />
      </a>
    </li>
  )
}

export default MoviesCard;