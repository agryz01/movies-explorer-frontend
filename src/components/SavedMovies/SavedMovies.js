import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Children } from 'react';

export default function SavedMovies(props) {
  return (
    <>
    {Children}
      <Header
        loggedIn={props.loggedIn} />
      <main className='saved-movies'>
        <SearchForm />
        <FilterCheckbox />
        <MoviesCardList
        cardsMovies ={props.cardsMovies} />
      </main>
      <Footer />
    </>
  )
}