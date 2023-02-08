import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function SavedMoviesCardList(props) {

  const classNameNotFound = props.allMovies.length !== 0 ? 'movies-list__not-foind movies-list__not-foind_active' : 'movies-list__not-foind';

  React.useEffect(() => {
    props.setSavedFoundMovies(props.savedMovies);
  }, [props.savedMovies]);

  return (
    <>
      {(props.movies.length === 0) ? (
        <h2 className={classNameNotFound}>Ничего не найдено</h2>
      ) : (
        <ul className='movies-list'>
          {
            props.movies.map((item) => {
              return (
                <MoviesCard
                  className={'movies-card__del'}
                  image={{ backgroundImage: `url(${item.image})` }}
                  card={item}
                  key={item._id}
                  handleLike={props.handleDelet}>
                </MoviesCard>
              )
            })
          }
        </ul>
      )}
    </>
  )
}