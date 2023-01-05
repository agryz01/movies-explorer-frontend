import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

export default function MoviesCardList(props) {


  return (
    <ul className='movies-list'>
      {
        props.cardsMovies.map((item) => (<MoviesCard
          name={item.nameRU}
          duration={item.duration}
          imageUrl={item.image.url}
          trailerLink={item.trailerLink}
          key={item.id} />))
      }
    </ul>
  )
}