import { Route } from 'react-router-dom/cjs/react-router-dom.min'
import './MoviesCard.css'

export default function MoviesCard(props) {
  const duratuon = (mins) => {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + 'ч. ' + minutes + 'м.';
  }

  return (
    <li className='movies-card'>
      <div className='movies-card__conteiner'>
        <div className='movies-card__conteiner-title'>
          <h2 className='movies-card__title'>{props.name}</h2>
          <h3 className='movies-card__duration'>{duratuon(props.duration)}</h3>
        </div>
        <Route path={'/movies'}>
          <button className='movies-card__like'></button>
        </Route>
        <Route path={'/saved-movies'}>
          <button className='movies-card__del'></button>
        </Route>
      </div>
      <a href={props.trailerLink}  rel="noreferrer" target="_blank">
        <div style={{ backgroundImage: `url(https://api.nomoreparties.co${props.imageUrl})` }} className='movies-card__trailer-link' />
      </a>
    </li>
  )
}