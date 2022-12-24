import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function Movies(props) {
  return (
    <div className='movies'>
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList />
      <button className='movies-list__more'>Ещё</button>
    </div>
  )
}