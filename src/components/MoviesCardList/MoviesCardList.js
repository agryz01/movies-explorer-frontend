import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

export default function MoviesCardList() {

  
  return (
    <ul className='movies-list'>
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
    </ul>
  )
}