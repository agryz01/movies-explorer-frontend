import React from 'react';
// import useFormWithValidation from '../../hooks/UseForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css'

export default function SearchForm(props) {

  const [togle, setTogle] = React.useState(localStorage.togle ? JSON.parse(localStorage.togle) : false);
  const [isValid, setIsValid] = React.useState(false);
  // const placeHolder = isValid ? '' : 'Фильм';
  // const classNameFormError = isValid ? 'search-form__error' : 'search-form__error search-form__error_active';

  const [searchForm, setSearchForm] = React.useState(localStorage.searchFormValue ? (localStorage.searchFormValue) : '');

  const handleChange = (e) => {
    setSearchForm(e.target.value);
    setIsValid(e.target.closest("form").checkValidity())
  }

  React.useEffect(() => {
    if (searchForm) {
      setIsValid(true);
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    props.ClickSearchButton(searchForm, isValid, togle);
  }

  const onClickTogle = () => {
    setTogle(!togle);
    localStorage.setItem('togle', JSON.stringify(!togle));
  }

  return (
    <>
      <form onSubmit={handleClick} noValidate className="search-form">
        <div className="search-form__icon"></div>
        <input onChange={handleChange} value={searchForm} type="text" name="searchForm" placeholder='Нужно ввести ключевое слово' required className="search-form__input"></input>
        <span className='search-form__error'>Нужно ввести ключевое слово</span>
        <button className="search-form__button" type="submit"></button>
      </form>
      <FilterCheckbox togle={togle} onClick={onClickTogle} />
    </>
  )
}