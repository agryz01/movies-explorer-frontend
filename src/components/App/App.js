import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { api } from '../../utils/MainApi';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import getMoviesApi from '../../utils/MoviesApi';
import searshMovies from '../searshMovies/searshMovies';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(localStorage?.loggedIn ? JSON.parse(localStorage?.loggedIn) : false);
  const [foundMovies, setFoundMovies] = React.useState(localStorage?.foundMovies ? JSON.parse(localStorage?.foundMovies) : []);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [add, setAdd] = React.useState(document.documentElement.clientWidth > 981 ? 3 : 2);
  const [startQuantity, setStartQuantity] = React.useState(document.documentElement.clientWidth < 628 ? 5 : (document.documentElement.clientWidth > 981 ? 12 : 8));
  const [quantity, setQuantity] = React.useState(startQuantity);
  const [isLoading, setIsLoading] = React.useState(false);
  const history = useHistory();

  React.useEffect(() => {
    api.getUserInformation()
      .then((res) => {
        setCurrentUser(res);
        setLoggedIn(true);
        localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
      })
      .catch((err) => {
        console.log(err);
        setLoggedIn(false);
        localStorage.removeItem('loggedIn');
      })
  }, [loggedIn]);

  const handleRegistering = ({ name, email, password }) => {
    api.setUser(name, email, password)
      .then((res) => {
        history.push('/signin');
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleLogin = ({ password, email }) => {
    api.authUser(email, password)
      .then(() => {
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleUpdateUser = ({ email, name }) => {
    console.log('запрос к серверу');
    api.setUserInformation(email, name)
      .then((res) => {
        setCurrentUser(res);
        console.log('данные изменены');
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleExit() {
    api.logout();
    setLoggedIn(false);
    localStorage.clear();
    history.push('/');
  }

  const handleClickSearchButton = (searchForm, isValid, togle) => {
    console.log(searchForm, isValid, togle);
    if (!isValid) {
      console.log(isValid);
      const textMessage = 'Нужно ввести ключевое слово';
      return textMessage;
    }
    setIsLoading(true);
    localStorage.setItem('searchFormValue', searchForm);
    getMoviesApi()
      .then((res) => {
        setFoundMovies(searshMovies(res, searchForm, togle));
        setQuantity(startQuantity);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  const handleButtonMore = () => {
    setQuantity(quantity + add);
  }

  const loadSavedMovies = () => {
    console.log('загрузка фильмов')
    api.getMovies()
      .then((res) => {
        setSavedMovies(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const addMovie = (card) => {
    api.setMovie(card)
      .then(() => {
        console.log('фильм в базе');
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => loadSavedMovies());
  }

  const deletMovie = ({_id}) => {
    api.deletMovie(_id)
      .then(() => {
        console.log('del');
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => loadSavedMovies());
  }

  const handleLike = (card) => {
    if (savedMovies.find((saveMovie) => saveMovie.movieId === card.id)) {
      deletMovie(savedMovies.find((saveMovie) => saveMovie.movieId === card.id));
    } else {
      addMovie(card);
    }
  }

  window.addEventListener('resize', () => {
    setTimeout(() => {
      let width = document.documentElement.clientWidth;
      if (width < 628) {
        setAdd(2);
        setStartQuantity(5);
      } else {
        if (width > 981) {
          setAdd(3);
          setStartQuantity(12);
        } else {
          setAdd(2);
          setStartQuantity(8);
        }
      }
    }, 2000)
  });

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path={'/'}>
            <Main loggedIn={loggedIn} />
          </Route>
          <ProtectedRoute loggedIn={loggedIn} path={'/movies'}>
            <Movies
              loggedIn={loggedIn}
              handleClickSearchButton={handleClickSearchButton}
              isLoading={isLoading}
              savedMovies={savedMovies}
              loadSavedMovies={loadSavedMovies}
              quantity={quantity}
              foundMovies={foundMovies}
              handleButtonMore={handleButtonMore}
              handleLike={handleLike} />
          </ProtectedRoute>
          <ProtectedRoute loggedIn={loggedIn} path={'/saved-movies'}>
            <SavedMovies
              loggedIn={loggedIn} />
          </ProtectedRoute>
          <ProtectedRoute loggedIn={loggedIn} path={'/profile'}>
            <Profile
              loggedIn={loggedIn}
              handleUpdateUser={handleUpdateUser}
              handleExit={handleExit} />
          </ProtectedRoute>
          <ProtectedRoute loggedIn={!loggedIn} path={'/signup'}>
            <Register handleRegistering={handleRegistering} />
          </ProtectedRoute>
          <ProtectedRoute loggedIn={!loggedIn} path={'/signin'}>
            <Login handleLogin={handleLogin} />
          </ProtectedRoute>
          <Route path={'/*'}>
            <NotFound />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
