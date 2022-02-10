import React from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Movies from './Movies';
import SavedMovies from './SavedMovies';
import Profile from './Profile';
import Register from './Register';
import Login from './Login';
import NotFound from './NotFound';
import moviesApi from '../utils/MoviesApi';
import { sortFilms, returnShortFilmsOnly } from '../utils/utils';
import mainApi from '../utils/MainApi';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import ProtectedRoute from './ProtectedRoute';

function App() {
  // Стейт-переменная, содержит информацию о статусе пользователя - вошел он в систему или нет
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [isScrollAllowed, setIsScrollAllowed] = React.useState(true)
  const [searchResult, setSearchResult] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isSending, setIsSending] = React.useState(false);
  const [savedFilmsSearchResults, setSavedFilmsSearchResults] = React.useState([]);
  const [shortFilmsSavedMovies, setShortFilmsSavedMovies] = React.useState([]);
  const [shortFilmsMovies, setShortFilmsMovies] = React.useState([]);
  const [isCheckboxSwitchedOn, setIsCheckboxSwitchedOn] = React.useState(false);
  const [isNotFoundNotificationShown, setIsNotFoundNotificationShown] = React.useState({page: '', state: false});

  // Переменные состояния, отвечающие за данные пользователя и сохраненные фильмы
  const [currentUser, setCurrentUser] = React.useState({name:'', email: '', _id: ''});
  const [savedMovies, setSavedMovies] = React.useState([]);

  // Хранит токен текущего пользователя
  const [token, setToken] = React.useState('');

  const history = useHistory();
  const location = useLocation();

  // Эффект, вызываемый при монтировании компонента, совершает запрос в API за пользовательскими данными
  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      const jwt = localStorage.getItem('token');

      mainApi.getUserInfo(jwt)
      .then((data) => {
        setLoggedIn(true);
        setToken(jwt);
      })
      .catch((err) => {
        setLoggedIn(false);
        console.log(err);
      });
    } else {
      setLoggedIn(false);
    }
  }, []);

  React.useEffect(() => {
    if (loggedIn && token) {
      mainApi.getInitialData(token)
      .then(([ userData, savedMoviesData ]) => {
        setSavedMovies(savedMoviesData.data.reduce((stack, item) => {
          (item.owner._id === userData.data._id && stack.push(item));

          return stack;
        }, []));

        setCurrentUser(userData.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, [token, loggedIn]);

  React.useEffect(() => {
    if (loggedIn) {
      if (location.pathname === '/signin' || location.pathname === '/signup') {
        history.push('/movies');
      }
    }
  }, [location.pathname, loggedIn, history]);

  function handlePageScroll(isMenuOpened) {
    if (isMenuOpened) {
      setIsScrollAllowed(false);
    } else {
      setIsScrollAllowed(true);
    }
  }

  function handleSearchButton(keyWord) {
    setIsNotFoundNotificationShown({page: '', state: false});

    setIsError(false);

    setIsLoading(true);
    if (location.pathname === '/saved-movies') {
      const sortedFilms = sortFilms(keyWord, savedMovies);

      setSavedFilmsSearchResults(sortedFilms);
      (isCheckboxSwitchedOn && setShortFilmsSavedMovies(returnShortFilmsOnly(sortedFilms)));

      if (sortedFilms.length < 1) {
        setIsNotFoundNotificationShown({page: '/saved-movies', state: true});
      }

      setIsLoading(false);
    } else {
      if (localStorage.getItem('filmData') === null) {
        moviesApi.getAllFilms()
        .then((data) => {
          const allFilms = data;
          const sortedFilms = sortFilms(keyWord, allFilms);

          localStorage.setItem('filmData', JSON.stringify(data));

          setSearchResult(sortedFilms);
          (isCheckboxSwitchedOn && setShortFilmsMovies(returnShortFilmsOnly(sortedFilms)));

          if (sortedFilms.length < 1) {
            setIsNotFoundNotificationShown({page: '/movies', state: true});
          }
        })
        .catch((err) => {
          console.log(err);
          setIsError(true);
        })
        .finally(() => {
          setIsLoading(false);
        })
      } else {
        const sortedFilms = sortFilms(keyWord, JSON.parse(localStorage.getItem('filmData')));

        setSearchResult(sortedFilms);
        (isCheckboxSwitchedOn && setShortFilmsMovies(returnShortFilmsOnly(sortedFilms)));

        if (sortedFilms.length < 1) {
          setIsNotFoundNotificationShown({page: '/movies', state: true});
        }

        setIsLoading(false);
      }
    }
  }

  function handleRegisterSubmit(data) {
    setIsError(false);
    setIsSending(true);

    mainApi.register(data.name, data.password, data.email)
    .then((dataRes) => {
      handleLoginSubmit({ password: data.password, email: data.email });
    })
    .catch((err) => {
      console.log(err);
      setIsError(true);
    })
    .finally(() => {
      setIsSending(false);
    })
  }

  function handleLoginSubmit(data) {
    setIsError(false);
    setIsSending(true);

    mainApi.authorization(data.password, data.email)
    .then((data) => {
      setLoggedIn(true);
      setToken(data.token);
      localStorage.setItem('token', data.token);
    })
    .catch((err) => {
      console.log(err);
      setIsError(true);
    })
    .finally(() => {
      setIsSending(false);
    })
  }

  function handleEditProfileSubmit(data) {
    setIsError(false);
    setIsSuccess(false);
    setIsSending(true);

    mainApi.updateUserInfo(data, token)
    .then((data) => {
      setCurrentUser(data.data);
      setIsSuccess(true);
    })
    .catch((err) => {
      console.log(err);
      setIsError(true);
    })
    .finally(() => {
      setIsSending(false);
    });
  }

  function handleLikeBtnClick(film) {
    mainApi.postFilm(film, token)
    .then((data) => {
      setSavedMovies((prevState) => [...prevState, data.data]);

      (isCheckboxSwitchedOn && setShortFilmsSavedMovies((prevState) => [...prevState, data.data]));
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function handleDeleteBtnClick(filmData) {
    mainApi.deleteCard(filmData, token)
    .then((data) => {
      setSavedMovies((state) => state.filter((c) => c._id !== filmData._id));

      (isCheckboxSwitchedOn && setShortFilmsSavedMovies((state) => state.filter((c) => c._id !== filmData._id)));
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function handleShortFilmsOn(isChecked) {
    setShortFilmsMovies([]);
    setShortFilmsSavedMovies([]);
    setIsCheckboxSwitchedOn(false);

    if (isChecked) {
      let shortFilms = [];
      setIsCheckboxSwitchedOn(true);

      switch (location.pathname) {
        case '/saved-movies':
          if (savedFilmsSearchResults.length > 0) {
            shortFilms = returnShortFilmsOnly(savedFilmsSearchResults);

          } else {
            shortFilms = returnShortFilmsOnly(savedMovies);
          }
          break;

        case '/movies':
          if (searchResult.length > 0) {
            shortFilms = returnShortFilmsOnly(searchResult);
          }
          break;

        default:
          break;
      }

      (location.pathname === '/saved-movies' ? setShortFilmsSavedMovies(shortFilms) : setShortFilmsMovies(shortFilms))
    }
  }

  function handleSignOut() {
    setLoggedIn(false);
    localStorage.removeItem('token');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className={isScrollAllowed ? `page` : `page page_type_no-scroll`}>
          <Switch>

            <Route exact path="/">
              <Header loggedIn={loggedIn} handlePageScroll={handlePageScroll}/>
                <Main />
              <Footer />
            </Route>

            <ProtectedRoute
              exact path="/movies"
              loggedIn={loggedIn}
              handlePageScroll={handlePageScroll}
              handleSearchButton={handleSearchButton}
              searchResult={searchResult}
              isLoading={isLoading}
              isError={isError}
              component={Movies}
              handleLikeBtnClick={handleLikeBtnClick}
              handleDeleteBtnClick={handleDeleteBtnClick}
              savedMovies={savedMovies}
              handleShortFilmsOn={handleShortFilmsOn}
              shortFilmsMovies={shortFilmsMovies}
              isCheckboxSwitchedOn={isCheckboxSwitchedOn}
              isNotFoundNotificationShown={isNotFoundNotificationShown}
            />

            <ProtectedRoute
              exact path="/saved-movies"
              loggedIn={loggedIn}
              handlePageScroll={handlePageScroll}
              handleSearchButton={handleSearchButton}
              isLoading={isLoading}
              isError={isError}
              searchResult={savedFilmsSearchResults}
              component={SavedMovies}
              savedMovies={savedMovies}
              handleDeleteBtnClick={handleDeleteBtnClick}
              handleShortFilmsOn={handleShortFilmsOn}
              shortFilmsSavedMovies={shortFilmsSavedMovies}
              isCheckboxSwitchedOn={isCheckboxSwitchedOn}
              isNotFoundNotificationShown={isNotFoundNotificationShown}
            />

            <ProtectedRoute
              exact path="/profile"
              loggedIn={loggedIn}
              handlePageScroll={handlePageScroll}
              component={Profile}
              handleEditProfileSubmit={handleEditProfileSubmit}
              isError={isError}
              handleSignOut={handleSignOut}
              isSuccess={isSuccess}
              isSending={isSending}
            />

            <Route exact path="/signin">
              <Login
                handleLoginSubmit={handleLoginSubmit}
                isError={isError}
                isSending={isSending}
              />
            </Route>

            <Route exact path="/signup">
              <Register
                handleRegisterSubmit={handleRegisterSubmit}
                isError={isError}
                isSending={isSending}
            />
            </Route>

            <Route path="/">
              <NotFound />
            </Route>

          </Switch>

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
