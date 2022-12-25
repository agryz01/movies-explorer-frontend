import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

export default function SavedMovies(props) {
  return (
    <>
      <Header
        className={'header'}>
        <Navigation
          onBurgerMenu={props.onBurgerMenu} />
      </Header>
      <main className='saved-movies'>
        <SearchForm />
        <FilterCheckbox />
        <MoviesCardList />
      </main>
      <Footer />
    </>
  )
}