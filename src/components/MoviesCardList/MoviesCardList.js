import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';
export default function MoviesCardList(props) {

  const mesage = props?.serverErrMesage && props?.success ? props?.serverErrMesage : 'Ничего не найдено';

  React.useEffect(() => {
    localStorage.setItem('foundMovies', JSON.stringify(props.foundMovies));
  }, [props.foundMovies]);

  return (
    <>
      {(props.foundMovies.length === 0) ? (
        <h2 className='movies-list__not-foind'>{mesage}</h2>
      ) : (
        <ul className='movies-list'>
          {
            props.foundMovies.slice(0, props.quantity).map((item) => {
              const isSaved = props.savedMovies.some((saveMovie) => saveMovie.movieId === item.id);
              return (
                <MoviesCard
                  className={isSaved ? 'movies-card__like movies-card__like_active' : 'movies-card__like'}
                  image={{ backgroundImage: `url(https://api.nomoreparties.co${item.image.url})` }}
                  card={item}
                  key={item.id}
                  handleLike={props.handleLike}>
                </MoviesCard>
              )
            })
          }
        </ul>
      )}
    </>
  )
}