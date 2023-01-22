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

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(localStorage.loggedIn ? JSON.parse(localStorage.loggedIn) : false);
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
      .then((res) => {
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

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path={'/'}>
            <Main loggedIn={loggedIn} />
          </Route>
          <ProtectedRoute loggedIn={loggedIn} path={'/movies'}>
            <Movies
              loggedIn={loggedIn} />
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
