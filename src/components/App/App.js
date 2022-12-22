import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import SavedMovies from '../SavedMovies/SavedMovies';


function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);

  function handleBurgerMenuClick() {
    setIsBurgerMenuOpen(true);
  }

  return (
    <div className="page">
      <Header onBurgerMenu={handleBurgerMenuClick} />
      <Switch>
        <Route exact path={'/'}>
          <Main />
          <Footer />
        </Route>
        <Route path={'/movies'}>
          <Movies />
          <Footer />
        </Route>
        <Route path={'/saved-movies'}>
          <SavedMovies />
          <Footer />
        </Route>
      </Switch>
      <BurgerMenu isOpen={isBurgerMenuOpen} />
    </div>
  );
}

export default App;
