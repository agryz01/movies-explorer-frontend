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
  errMesage,
  isLoading,
  loadSavedMovies,
  savedFoundMovies,
  setSavedFoundMovies,
  savedMovies,
  handleDelet
}) {

  React.useEffect(() => {
    setSavedFoundMovies(savedMovies);
  }, [savedMovies]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className='saved-movies'>
        <SearchForm
          SearchButton={SearchButtonSavedMovies}
          success={success}
          errMesage={errMesage} />
        <Preloader isLoading={isLoading} />
        <SavedMoviesCardList
          loadSavedMovies={loadSavedMovies}
          savedFoundMovies={savedFoundMovies}
          handleDelet={handleDelet} />
      </main>
      <Footer />
    </>
  )
}