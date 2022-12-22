import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function SavedMovies() {
return (
  <div className='saved-movies'>
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList />
    </div>
)
}