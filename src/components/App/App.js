import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import getMoviesApi from '../../utils/MoviesApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { api } from '../../utils/MainApi';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);
  const [cardsMovies, setCardsMovies] = React.useState([]);  
  const history = useHistory();

  const handleRegistering = ({name, email, password}) => {
    api.setUser(name, email, password)
    .then((res) => {
      history.push('/signin');
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const handleLogin = ({password, email}) => {
    api.authUser(email, password)
    .then((res) => {
      setLoggedIn(true);
      history.push('/movies');
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const handleClickSearchButton = () => {
    getMoviesApi()
      .then((res) => {
        setCardsMovies(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
      })
  }

  function handleBurgerMenuClick() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path={'/'}>
            <Main />
          </Route>
          <Route path={'/movies'}>
            <Movies
              onBurgerMenu={handleBurgerMenuClick}
              ClickSearchButton={handleClickSearchButton}
              cardsMovies={cardsMovies} />
          </Route>
          <Route path={'/saved-movies'}>
            <SavedMovies
              onBurgerMenu={handleBurgerMenuClick} />
          </Route>
          <Route path={'/profile'}>
            <Profile
              onBurgerMenu={handleBurgerMenuClick} />
          </Route>
          <Route path={'/signup'}>
            <Register handleRegistering={handleRegistering} />
          </Route>
          <Route path={'/signin'}>
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path={'/*'}>
            <NotFound />
          </Route>
        </Switch>
        <BurgerMenu
          isOpen={isBurgerMenuOpen}
          onBurgerMenu={handleBurgerMenuClick} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
