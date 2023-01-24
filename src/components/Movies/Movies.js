import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import React from 'react';
import Preloader from '../Preloader/Preloader';

export default function Movies({
  SearchButtonMovies,
  loggedIn,
  isLoading,
  savedMovies,
  loadSavedMovies,
  quantity,
  foundMovies,
  handleButtonMore,
  success,
  errMesage,
  serverErrMesage,
  handleLike
}) {

  React.useEffect(() => loadSavedMovies(), []);

  const classNameButton = foundMovies.length >= quantity ? ((foundMovies.length <= quantity) ? 'movies-list__more' : 'movies-list__more movies-list__more_active') : 'movies-list__more';
  const classNameCardsList = isLoading ? 'movies__cardsList' : 'movies__cardsList_active';

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className='movies'>
        <SearchForm
          SearchButton={SearchButtonMovies}
          success={success}
          errMesage={errMesage} />
        <Preloader isLoading={isLoading} />
        <section className={classNameCardsList}>
          <MoviesCardList
            serverErrMesage={serverErrMesage}
            success={success}
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