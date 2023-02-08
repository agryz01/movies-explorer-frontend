import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css'

export default function SearchForm({
  togle,
  SearchButton,
  setTogle,
  errMessage,
  success,
  searchMovies,
  setSearchMovies
}) {

  const [isValid, setIsValid] = React.useState(searchMovies?.length !== 0 ? true : false);
  const placeholder = errMessage && !success ? errMessage : 'Фильм';

  const handleChange = (e) => {
    setSearchMovies(e.target.value);
    setIsValid(e.target.closest("form").checkValidity())
  }

  const handleClick = (e) => {
    e.preventDefault();
    SearchButton(searchMovies, isValid);
  }

  const onClickTogle = () => {
    setTogle(!togle);
  }

  return (
    <>
      <form onSubmit={handleClick} noValidate className="search-form">
        <div className="search-form__icon"></div>
        <input onChange={handleChange} value={searchMovies || ''} type="text" name="searchForm" placeholder={placeholder} required className="search-form__input"></input>
        <button className="search-form__button" type="submit"></button>
      </form>
      <FilterCheckbox togle={togle} onClick={onClickTogle} />
    </>
  )
}