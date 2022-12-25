import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

export default function Movies(props) {
  return (
    <>
      <Header
        className={'header'}>
        <Navigation
          onBurgerMenu={props.onBurgerMenu} />
      </Header>
      <main className='movies'>
        <SearchForm />
        <FilterCheckbox />
        <MoviesCardList />
        <button className='movies-list__more'>Ещё</button>
      </main>
      <Footer />
    </>
  )
}