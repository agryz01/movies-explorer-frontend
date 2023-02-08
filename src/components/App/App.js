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
  const [currentUser, setCurrentUser] = React.useState(localStorage?.currentUser ? JSON.parse(localStorage?.currentUser) : {});
  const [loggedIn, setLoggedIn] = React.useState(localStorage?.loggedIn ? JSON.parse(localStorage?.loggedIn) : false);
  const [allMovies, setAllMovies] = React.useState([]);
  const [foundMovies, setFoundMovies] = React.useState(localStorage?.foundMovies ? JSON.parse(localStorage?.foundMovies) : []);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [savedFoundMovies, setSavedFoundMovies] = React.useState([]);
  const [add, setAdd] = React.useState(document.documentElement.clientWidth > 981 ? 3 : 2);
  const [startQuantity, setStartQuantity] = React.useState(document.documentElement.clientWidth < 628 ? 5 : (document.documentElement.clientWidth > 981 ? 12 : 8));
  const [quantity, setQuantity] = React.useState(startQuantity);
  const [isLoading, setIsLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [errMessage, setErrMessage] = React.useState(null);
  const [serverMessage, setServerMessage] = React.useState(null);
  const [editProfile, setEditProfile] = React.useState(false);
  const [moviesTogle, setMoviesTogle] = React.useState(localStorage?.moviesTogle ? JSON.parse(localStorage?.moviesTogle) : false);
  const [savedMoviesTogle, setSavedMoviesTogle] = React.useState(false);
  const [searchMovies, setSearchMovies] = React.useState(localStorage?.searchMoviesValue ? (localStorage?.searchMoviesValue) : '');
  const [searchSavedMovies, setSearchSavedMovies] = React.useState('');
  const history = useHistory();

  React.useEffect(() => {
    Promise.all([
      api.getUserInformation(),
      api.getMovies()
    ])
      .then(([userData, savMovies]) => {
        setCurrentUser(userData);
        setSavedMovies(savMovies);
        setLoggedIn(true);
        localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
        localStorage.setItem('currentUser', JSON.stringify(userData));
      })
      .catch((err) => {
        console.log(err);
        setLoggedIn(false);
        if (localStorage?.loggedIn) {
          localStorage.removeItem('loggedIn');
        }
      })
  }, [loggedIn]);

  const handleRegistering = ({ name, email, password }) => {
    api.setUser(name, email, password)
      .then(() => {
        handleLogin({ password, email });
        setServerMessage(null);
      })
      .catch((err) => {
        console.log(err);
        setServerMessage(err.message);
      })
  }

  const handleLogin = ({ password, email }) => {
    api.authUser(email, password)
      .then(() => {
        setLoggedIn(true);
        setServerMessage(null);
        history.push('/movies');
      })
      .catch((err) => {
        console.log(err);
        setServerMessage(err.message);
      })
  }

  const handleUpdateUser = ({ email, name }) => {
    api.setUserInformation(email, name)
      .then((res) => {
        setCurrentUser(res);
        setEditProfile(!editProfile);
        setServerMessage('изменения успешно сохранены');
      })
      .catch((err) => {
        console.log(err);
        setServerMessage(err.message);
      })
  }

  function handleExit() {
    api.logout();
    setLoggedIn(false);
    localStorage.clear();
    setCurrentUser({});
    setFoundMovies([]);
    setSavedMovies([]);
    setSavedFoundMovies([]);
    setMoviesTogle(false);
    setSearchMovies([]);
    setAllMovies([]);
    history.push('/');
  }

  // const SearchButtonMovies = (searchForm, isValid, togle) => {
  //   if (!isValid) {
  //     setSuccess(false);
  //     setErrMessage('Нужно ввести ключевое слово');
  //     return;
  //   }
  //   setIsLoading(true);
  //   if (allMovies.length === 0) {
  //     getMoviesApi()
  //       .then((res) => {
  //         setSuccess(true);
  //         setFoundMovies(searshMovies(res, searchForm, togle));
  //         setAllMovies(res);
  //         setQuantity(startQuantity);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         setSuccess(false);
  //         setServerMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
  //       })
  //       .finally(() => {
  //         setIsLoading(false);
  //       })
  //   } else {
  //     setFoundMovies(searshMovies(allMovies, searchForm, togle));
  //     setQuantity(startQuantity);
  //     setIsLoading(false);
  //   }
  // }
  const SearchButtonMovies = (searchForm, isValid) => {
    // console.log(isValid, searchMovies);
    if (!isValid) {
      setSuccess(false);
      setErrMessage('Нужно ввести ключевое слово');
      return;
    }
    setIsLoading(true);
    if (allMovies.length === 0) {
      console.log('с запросом', isValid, searchMovies);
      getMoviesApi()
        .then((res) => {
          setSuccess(true);
          setFoundMovies(searshMovies(res, searchForm));
          setAllMovies(res);
          setQuantity(startQuantity);
        })
        .catch((err) => {
          console.log(err);
          setSuccess(false);
          setServerMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        })
        .finally(() => {
          setIsLoading(false);
        })
    } else {
      setFoundMovies(searshMovies(allMovies, searchForm));
      setQuantity(startQuantity);
      setIsLoading(false);
    }
  }

  const SearchButtonSavedMovies = (searchForm, isValid, togle) => {
    if (!isValid) {
      setSuccess(false);
      setErrMessage('Нужно ввести ключевое слово');
      return;
    }
    setSavedFoundMovies(searshMovies(savedMovies, searchForm, togle));
  }

  const handleButtonMore = () => {
    setQuantity(quantity + add);
  }

  const addMovie = (card) => {
    api.setMovie(card)
      .then((res) => {
        setSavedMovies([...savedMovies, res])
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleDelet = (card) => {
    deletMovie(card);
  }

  const deletMovie = ({ _id }) => {
    api.deletMovie(_id)
      .then(() => {
        setSavedMovies((state) => state.filter((item) => item._id !== _id))
      })
      .catch((err) => {
        console.log(err);
      })
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
              SearchButtonMovies={SearchButtonMovies}
              moviesTogle={moviesTogle}
              setMoviesTogle={setMoviesTogle}
              searchMovies={searchMovies}
              setSearchMovies={setSearchMovies}
              success={success}
              errMessage={errMessage}
              serverMessage={serverMessage}
              isLoading={isLoading}
              savedMovies={savedMovies}
              quantity={quantity}
              foundMovies={foundMovies}
              allMovies={allMovies}
              handleButtonMore={handleButtonMore}
              handleLike={handleLike} />
          </ProtectedRoute>
          <ProtectedRoute loggedIn={loggedIn} path={'/saved-movies'}>
            <SavedMovies
              loggedIn={loggedIn}
              SearchButtonSavedMovies={SearchButtonSavedMovies}
              success={success}
              errMessage={errMessage}
              isLoading={isLoading}
              savedMoviesTogle={savedMoviesTogle}
              setSavedMoviesTogle={setSavedMoviesTogle}
              searchSavedMovies={searchSavedMovies}
              setSearchSavedMovies={setSearchSavedMovies}
              savedMovies={savedMovies}
              setSavedFoundMovies={setSavedFoundMovies}
              savedFoundMovies={savedFoundMovies}
              allMovies={allMovies}
              handleDelet={handleDelet} />
          </ProtectedRoute>
          <ProtectedRoute loggedIn={loggedIn} path={'/profile'}>
            <Profile
              loggedIn={loggedIn}
              handleUpdateUser={handleUpdateUser}
              serverMessage={serverMessage}
              setServerMessage={setServerMessage}
              editProfile={editProfile}
              setEditProfile={setEditProfile}
              handleExit={handleExit} />
          </ProtectedRoute>
          <ProtectedRoute loggedIn={!loggedIn} path={'/signup'}>
            <Register
              handleRegistering={handleRegistering}
              serverMessage={serverMessage}
              setServerMessage={setServerMessage} />
          </ProtectedRoute>
          <ProtectedRoute loggedIn={!loggedIn} path={'/signin'}>
            <Login
              handleLogin={handleLogin}
              serverMessage={serverMessage}
              setServerMessage={setServerMessage} />
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
