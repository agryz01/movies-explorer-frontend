import React from 'react';
import './MoviesCard.css'

export default function MoviesCard({ card, handleLike, className, image }) {

  const duratuon = (mins) => {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + 'ч. ' + minutes + 'м.';
  }

  const handleClick = () => {
    handleLike(card);
  }

  return (
    <li className='movies-card'>
      <div className='movies-card__conteiner'>
        <div className='movies-card__conteiner-title'>
          <h2 className='movies-card__title'>{card.nameRU}</h2>
          <h3 className='movies-card__duration'>{duratuon(card.duration)}</h3>
        </div>
        <button onClick={handleClick} className={className}></button>
      </div>
      <a href={card.trailerLink} rel="noreferrer" target="_blank">
        <div style={image} className='movies-card__trailer-link' />
      </a>
    </li>
  )
}