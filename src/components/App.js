import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Movies from './Movies';
import SearchForm from './SearchForm';
import SavedMovies from './SavedMovies';
import Profile from './Profile';
import Register from './Register';
import Login from './Login';
import NotFound from './NotFound';

function App() {
  // Стейт-переменная, содержит информацию о статусе пользователя - вошел он в систему или нет
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [isScrollAllowed, setIsScrollAllowed] = React.useState(true)

  function handlePageScroll(isMenuOpened) {
    if (isMenuOpened) {
      setIsScrollAllowed(false);
    } else {
      setIsScrollAllowed(true);
    }
  }

  return (
    <div className={isScrollAllowed ? `page` : `page page_type_no-scroll`}>
        <Switch>

          <Route exact path="/">
            <Header isLogged={loggedIn} handlePageScroll={handlePageScroll}/>
              <Main />
            <Footer />
          </Route>

          <Route exact path="/movies">
            <Header isLogged={loggedIn} handlePageScroll={handlePageScroll}/>
              <SearchForm />
              <Movies />
            <Footer />
          </Route>

          <Route exact path="/saved-movies">
            <Header isLogged={loggedIn} handlePageScroll={handlePageScroll}/>
              <SearchForm />
              <SavedMovies />
            <Footer />
          </Route>

          <Route exact path="/profile">
          <Header isLogged={loggedIn} handlePageScroll={handlePageScroll}/>
            <Profile />
          </Route>

          <Route exact path="/signin">
            <Login />
          </Route>

          <Route exact path="/signup">
            <Register />
          </Route>

          <Route path="/">
            <NotFound />
          </Route>

        </Switch>

    </div>
  );
}

export default App;
