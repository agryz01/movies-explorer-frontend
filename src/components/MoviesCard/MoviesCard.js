import { Route } from 'react-router-dom/cjs/react-router-dom.min'
import './MoviesCard.css'

export default function MoviesCard() {
  return (
    <li className='movies-card'>
      <div className='movies-card__conteiner'>
        <div className='movies-card__conteiner-title'>
          <h2 className='movies-card__title'>«Роллинг Стоунз» в изгнании</h2>
          <h3 className='movies-card__duration'>1ч 1м</h3>
        </div>
        <Route path={'/movies'}>
          <button className='movies-card__like'></button>
        </Route>
        <Route path={'/saved-movies'}>
          <button className='movies-card__del'></button>
        </Route>
      </div>
      <img src='https://api.nomoreparties.co/uploads/stones_in_exile_b2f1b8f4b7.jpeg' alt='превью к фильму «Роллинг Стоунз» в изгнании' className='movies-card__trailer-link'></img>
    </li>
  )
}