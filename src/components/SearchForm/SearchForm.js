import './SearchForm.css'

export default function SearchForm(props) {
  const handleClick = (data) => {
    props.ClickSearchButton();
  }

  return(
    <form className="search-form">
      <div className="search-form__icon"></div>
      <input type="text" name="search-form" placeholder="Фильм" required className="search-form__input"></input>
      <button onClick={handleClick} className="search-form__button" type="submit"></button>
    </form>
  )
}