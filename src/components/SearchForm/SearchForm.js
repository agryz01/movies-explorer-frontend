import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css'

export default function SearchForm(props) {

  const [togle, setTogle] = React.useState(localStorage?.togle ? JSON.parse(localStorage?.togle) : false);
  const [searchForm, setSearchForm] = React.useState(localStorage?.searchFormValue ? (localStorage?.searchFormValue) : null);
  const [isValid, setIsValid] = React.useState(searchForm ? true : false);
  const placeholder = props?.errMesage && !props.success ? props.errMesage : 'Фильм';

  const handleChange = (e) => {
    setSearchForm(e.target.value);
    setIsValid(e.target.closest("form").checkValidity())
  }

  const handleClick = (e) => {
    e.preventDefault();
    props.SearchButton(searchForm, isValid, togle);
  }

  const onClickTogle = () => {
    setTogle(!togle);
    localStorage.setItem('togle', JSON.stringify(!togle));
    props.SearchButton(searchForm, isValid, !togle);
  }

  return (
    <>
      <form onSubmit={handleClick} noValidate className="search-form">
        <div className="search-form__icon"></div>
        <input onChange={handleChange} value={searchForm || ''} type="text" name="searchForm" placeholder={placeholder} required className="search-form__input"></input>
        <button className="search-form__button" type="submit"></button>
      </form>
      <FilterCheckbox togle={togle} onClick={onClickTogle} />
    </>
  )
}