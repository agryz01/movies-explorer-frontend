import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';


function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);

  function handleBurgerMenuClick() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  return (
    <div className="page">
      <Switch>
        <Route exact path={'/'}>
          <Main />
        </Route>
        <Route path={'/movies'}>
          <Movies
            onBurgerMenu={handleBurgerMenuClick} />
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
          <Register />
        </Route>
        <Route path={'/signin'}>
          <Login />
        </Route>
        <Route path={'/*'}>
          <NotFound />
        </Route>
      </Switch>
      <BurgerMenu
        isOpen={isBurgerMenuOpen}
        onBurgerMenu={handleBurgerMenuClick} />
    </div>
  );
}

export default App;
