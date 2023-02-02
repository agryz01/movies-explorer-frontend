import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';
import React from 'react';
import Preloader from '../Preloader/Preloader';

export default function SavedMovies({
  loggedIn,
  SearchButtonSavedMovies,
  success,
  errMessage,
  isLoading,
  savedFoundMovies,
  setSavedFoundMovies,
  savedMovies,
  savedMoviesTogle,
  setSavedMoviesTogle,
  searchSavedMovies,
  setSearchSavedMovies,
  handleDelet,
  allMovies
}) {

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className='saved-movies'>
        <SearchForm
          SearchButton={SearchButtonSavedMovies}
          togle={savedMoviesTogle}
          setTogle={setSavedMoviesTogle}
          searchMovies={searchSavedMovies}
          setSearchMovies={setSearchSavedMovies}
          success={success}
          errMessage={errMessage} />
        <Preloader isLoading={isLoading} />
        <SavedMoviesCardList
          allMovies={allMovies}
          savedFoundMovies={savedFoundMovies}
          setSavedFoundMovies={setSavedFoundMovies}
          savedMovies={savedMovies}
          handleDelet={handleDelet} />
      </main>
      <Footer />
    </>
  )
}