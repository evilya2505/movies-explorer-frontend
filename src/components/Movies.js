import React from "react";
import MoviesCard from "./MoviesCard";
import Preloader from "./Preloader";
import SearchError from "./SearchError";
import SearchForm from "./SearchForm";
import Header from "./Header";
import Footer from "./Footer";
import NoResultsError from "./NoResultsError";

function Movies({ isNotFoundNotificationShown, isCheckboxSwitchedOn, shortFilmsMovies, handleShortFilmsOn, handleDeleteBtnClick, savedMovies, searchResult, isLoading, isError, loggedIn, handlePageScroll, handleSearchButton, handleLikeBtnClick }) {
  // --- Стейт-переменные ---
  // Хранит информацию о фильмах, которые отображаются на странице в данный момент
  const [loadedResults, setLoadedResults] = React.useState([]);
  // Хранит информацию о фильмах, которые еще не отображены на странице
  const [unloadedResults, setUnloadedResults] = React.useState([]);

  React.useEffect(() => {
    setLoadedResults([]);
    setUnloadedResults([]);

    const filmsForLoading = (isCheckboxSwitchedOn ? shortFilmsMovies : searchResult);

    // Если длина массива больше семи, то все фильмы, начиная с индекса 6 добавляются в массив unloadedResults
    // А элементы с 0 по 6 индексы добавляются в массив loadedResults
    // Если длина массива меньше семи, то все элементы массива добавляются в массив loadedResults
    if (filmsForLoading.length > 7) {
      setUnloadedResults(filmsForLoading.slice(6, filmsForLoading.length));
      setLoadedResults(filmsForLoading.slice(0,6));
    } else {
      setLoadedResults(filmsForLoading);
    }
  }, [searchResult, shortFilmsMovies, isCheckboxSwitchedOn]);

  function handleMoreButton() {
    // В зависимости от текущего разрешения устанавливается сколько карточек будет заружаться
    const amountOfAddingMovies = (document.body.clientWidth >= 768 ? 2 : 3)

    if (unloadedResults.length > amountOfAddingMovies) {
      setLoadedResults(prevArr => prevArr.concat(unloadedResults.slice(0,amountOfAddingMovies)));
      setUnloadedResults(prevArr => prevArr.slice(amountOfAddingMovies));
    } else {
      setLoadedResults(prevArr => prevArr.concat(unloadedResults));
      setUnloadedResults([]);
    }
  }

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
        {console.log(isNotFoundNotificationShown)}
        {(isNotFoundNotificationShown.page === '/movies' && isNotFoundNotificationShown.state === true) ? <NoResultsError /> : ''}
        {isError
        ? <SearchError />
        : <ul className="cards__list">
          {Array.isArray(loadedResults) && loadedResults.map(film => {
                return (<MoviesCard
                              handleLikeBtnClick={handleLikeBtnClick}
                              handleDeleteBtnClick={handleDeleteBtnClick}
                              film={film}
                              key={film.id}
                              name={film.nameRU}
                              duration={film.duration}
                              image={film.image.url}
                              savedMovie={savedMovies.filter((movie) => {return (movie?.nameRU === film.nameRU)})}
                        />)
          })}
          </ul>}


        {unloadedResults.length > 0 && <button className="cards__more-btn" onClick={handleMoreButton}>Ещё</button>}
      </section>
      <Footer />
    </>
  )
}

export default Movies;