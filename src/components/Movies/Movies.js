import './Movies.css';
import getMoviesApi from '../../utils/MoviesApi';
import SearchForm from '../SearchForm/SearchForm';
import searshMovies from '../searshMovies/searshMovies';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import React from 'react';
import Preloader from '../Preloader/Preloader';
import { api } from '../../utils/MainApi';

export default function Movies({
  handleClickSearchButton,
  loggedIn,
  isLoading,
  savedMovies,
  loadSavedMovies,
  quantity,
  foundMovies,
  handleButtonMore,
  handleLike
}) {

  // const [movies, setMovies] = React.useState(localStorage.foundMovies ? JSON.parse(localStorage.foundMovies) : []);
  // const [savedMovies, setSavedMovies] = React.useState([]);
  // const [add, setAdd] = React.useState(document.documentElement.clientWidth > 981 ? 3 : 2);
  // const [quantity, setQuantity] = React.useState(document.documentElement.clientWidth < 628 ? 5 : (document.documentElement.clientWidth > 981 ? 12 : 8));
  // const [isLoading, setIsLoading] = React.useState(false);
  const classNameButton = foundMovies.length >= quantity ? ((foundMovies.length <= quantity) ? 'movies-list__more' : 'movies-list__more movies-list__more_active') : 'movies-list__more';
  const classNameCardsList = isLoading ? 'movies__cardsList' : 'movies__cardsList_active';

  // window.addEventListener('resize', () => {
  //   setTimeout(() => {
  //     let width = document.documentElement.clientWidth;
  //     if (width < 628) {
  //       setAdd(2);
  //       setGuantity(5);
  //     } else {
  //       if (width > 981) {
  //         setAdd(3);
  //         setGuantity(12);
  //       } else {
  //         setAdd(2);
  //         setGuantity(8);
  //       }
  //     }
  //   }, 2000)
  // });

  return (
    <>
      <Header
        loggedIn={loggedIn} />
      <main className='movies'>
        <SearchForm
          handleClickSearchButton={handleClickSearchButton} />
        <Preloader isLoading={isLoading} />
        <section className={classNameCardsList}>
          <MoviesCardList
            savedMovies={savedMovies}
            loadSavedMovies={loadSavedMovies}
            quantity={quantity}
            foundMovies={foundMovies}
            handleLike={handleLike} />
          <button onClick={handleButtonMore} className={classNameButton}>Ещё</button>
        </section>
      </main>
      <Footer />
    </>
  )
}