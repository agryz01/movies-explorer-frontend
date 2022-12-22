import './SearchForm.css'

export default function SearchForm() {
  return(
    <form className="search-form">
      <div className="search-form__icon"></div>
      <input type="text" name="search-form" placeholder="Фильм" className="search-form__input"></input>
      <button className="search-form__button" type="submit"></button>
    </form>
  )
}