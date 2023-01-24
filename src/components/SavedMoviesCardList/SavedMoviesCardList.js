import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function SavedMoviesCardList(props) {

  return (
    <>
      {(props.savedFoundMovies.length === 0) ? (
        <h2 className='movies-list__not-foind'>Ничего не найдено</h2>
      ) : (
        <ul className='movies-list'>
          {
            props.savedFoundMovies.map((item) => {
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