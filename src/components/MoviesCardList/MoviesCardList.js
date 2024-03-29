import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';
export default function MoviesCardList(props) {

  const mesage = props?.serverMessage && props?.success ? props?.serverMessage : 'Ничего не найдено';
  const classNameNotFound = props.allMovies.length !== 0 ? 'movies-list__not-foind movies-list__not-foind_active' : 'movies-list__not-foind';

  React.useEffect(() => {
    localStorage.setItem('foundMovies', JSON.stringify(props.foundMovies));
    localStorage.setItem('moviesTogle', JSON.stringify(props.moviesTogle));
    localStorage.setItem('searchMoviesValue', props.searchMovies);
  }, [props.foundMovies, props.moviesTogle]);

  return (
    <>
      {(props.movies.length === 0) ? (
        <h2 className={classNameNotFound}>{mesage}</h2>
      ) : (
        <ul className='movies-list'>
          {
            props.movies.slice(0, props.quantity).map((item) => {
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