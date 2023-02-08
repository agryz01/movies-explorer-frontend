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
  quantity,
  foundMovies,
  allMovies,
  handleButtonMore,
  success,
  errMessage,
  serverMessage,
  moviesTogle,
  setMoviesTogle,
  searchMovies,
  setSearchMovies,
  handleLike
}) {

  const movies = moviesTogle ? foundMovies.filter((item) => item.duration <= 40) : foundMovies;
  const classNameButton = movies.length >= quantity ? ((movies.length <= quantity) ? 'movies-list__more' : 'movies-list__more movies-list__more_active') : 'movies-list__more';
  const classNameCardsList = isLoading ? 'movies__cardsList' : 'movies__cardsList_active';

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className='movies'>
        <SearchForm
          SearchButton={SearchButtonMovies}
          togle={moviesTogle}
          setTogle={setMoviesTogle}
          searchMovies={searchMovies}
          setSearchMovies={setSearchMovies}
          success={success}
          errMessage={errMessage} />
        <Preloader isLoading={isLoading} />
        <section className={classNameCardsList}>
          <MoviesCardList
            movies={movies}
            serverMessage={serverMessage}
            searchMovies={searchMovies}
            moviesTogle={moviesTogle}
            success={success}
            savedMovies={savedMovies}
            quantity={quantity}
            allMovies={allMovies}
            foundMovies={foundMovies}
            handleLike={handleLike} />
          <button onClick={handleButtonMore} className={classNameButton}>Ещё</button>
        </section>
      </main>
      <Footer />
    </>
  )
}