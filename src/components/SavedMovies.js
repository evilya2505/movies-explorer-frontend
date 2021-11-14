import React from "react";
import MoviesCard from "./MoviesCard";
import Header from "./Header";
import Footer from "./Footer";
import SearchError from "./SearchError";
import SearchForm from "./SearchForm";
import Preloader from "./Preloader";
import NoResultsError from "./NoResultsError";

function SavedMovies({ isNotFoundNotificationShown, isCheckboxSwitchedOn, shortFilmsSavedMovies, handleShortFilmsOn, savedMovies, loggedIn, handlePageScroll, handleSearchButton, searchResult, isLoading, isError, handleDeleteBtnClick }) {
  // --- Стейт-переменные ---
  // Хранит информацию о фильмах, которые отображаются на странице
  const [filmsForLoading, setFilmsForLoading] = React.useState([]);

  React.useEffect(() => {
    let filmsForLoadingTemp = [];

    if (searchResult.length < 1) {
      if (!isCheckboxSwitchedOn) {
        filmsForLoadingTemp = savedMovies;
      } else {
        filmsForLoadingTemp = shortFilmsSavedMovies;
      }
    } else if (searchResult.length > 0) {
      if (isCheckboxSwitchedOn) {
        filmsForLoadingTemp = shortFilmsSavedMovies;
      } else {
        filmsForLoadingTemp = searchResult;
      }
    }

    setFilmsForLoading(filmsForLoadingTemp);

  }, [searchResult, savedMovies, shortFilmsSavedMovies, isCheckboxSwitchedOn]);

  return (
    <>
      <Header
        loggedIn={loggedIn}
        handlePageScroll={handlePageScroll}
      />
        <SearchForm
          handleSearchButton={handleSearchButton}
          handleShortFilmsOn={handleShortFilmsOn}
          isCheckboxSwitchedOn={isCheckboxSwitchedOn}
        />
        <section className="cards content__cards">
            {isLoading ? <Preloader /> : ''}
            {isNotFoundNotificationShown.page === '/saved-movies' && isNotFoundNotificationShown.state === true ? <NoResultsError /> : ''}
            {isError
            ? <SearchError />
            : <ul className="cards__list">
              {Array.isArray(filmsForLoading) && filmsForLoading.map(film => {
                    return (<MoviesCard
                                  handleDeleteBtnClick={handleDeleteBtnClick}
                                  film={film}
                                  key={film.movieId}
                                  name={film.nameRU}
                                  duration={film.duration}
                                  image={film.image.url}
                            />)
              })}
              </ul>}
        </section>
      <Footer />
    </>
  )
}

export default SavedMovies;