import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';

export default function MoviesCardList(props) {

  React.useEffect(() => {
    localStorage.setItem('foundMovies', JSON.stringify(props.cardsMovies));
  }, [props.cardsMovies]);

  return (
    <>
      {(props.cardsMovies.length === 0) ? (
        <h2 className='movies-list__not-foind'>Ничего не найдено</h2>
      ) : (
        <ul className='movies-list'>
          {
            props.cardsMovies.slice(0, props.quantity).map((item) => (<MoviesCard
              name={item.nameRU}
              duration={item.duration}
              imageUrl={item.image.url}
              trailerLink={item.trailerLink}
              key={item.id} />))
          }
        </ul>
      )}
    </>
  )
}