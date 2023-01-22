import './Movies.css';
import getMoviesApi from '../../utils/MoviesApi';
import SearchForm from '../SearchForm/SearchForm';
import searshMovies from '../searshMovies/searshMovies';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import React from 'react';
import Preloader from '../Preloader/Preloader';
import { api } from '../../utils/MainApi';

export default function Movies(props) {

  const [movies, setMovies] = React.useState(localStorage.foundMovies ? JSON.parse(localStorage.foundMovies) : []);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [add, setAdd] = React.useState(document.documentElement.clientWidth > 981 ? 3 : 2);
  const [quantity, setQuantity] = React.useState(document.documentElement.clientWidth < 628 ? 5 : (document.documentElement.clientWidth > 981 ? 12 : 8));
  const [isLoading, setIsLoading] = React.useState(false);
  const classNameButton = movies.length >= quantity ? ((movies.length <= quantity) ? 'movies-list__more' : 'movies-list__more movies-list__more_active') : 'movies-list__more';
  const classNameCardsList = isLoading ? 'movies__cardsList' : 'movies__cardsList_active';

  // window.addEventListener('resize', () => {
  //   setTimeout(() => {
  //     let width = document.documentElement.clientWidth;
  //     if (width < 628) {
  //       setAdd(2);
  //       setGuantity(5);
  //     } else {
  //       if (width > 981) {
  //         setAdd(3);
  //         setGuantity(12);
  //       } else {
  //         setAdd(2);
  //         setGuantity(8);
  //       }
  //     }
  //   }, 2000)
  // });

  const handleClickSearchButton = (searchForm, isValid, togle) => {
    if (!isValid) {
      console.log(isValid);
      const textMessage = 'Нужно ввести ключевое слово';
      return textMessage;
    }
    setIsLoading(true);
    localStorage.setItem('searchFormValue', searchForm);
    getMoviesApi()
      .then((res) => {
        setMovies(searshMovies(res, searchForm, togle));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  const handleButtonMore = () => {
    setQuantity(quantity + add);
  }

  const loadSavedMovies = () => {
    console.log('загрузка фильмов')
    api.getMovies()
      .then((res) => {
        setSavedMovies(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const addMovie = (card) => {
    api.setMovie(card)
      .then(() => {
        console.log('фильм в базе');
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => loadSavedMovies());
  }

  const deletMovie = (card) => {
    api.deletMovie(savedMovies.find((i) => i.movieId === card.id)?._id)
      .then(() => {
        console.log('del');
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => loadSavedMovies());
  }

  return (
    <>
      <Header
        loggedIn={props.loggedIn} />
      <main className='movies'>
        <SearchForm
          ClickSearchButton={handleClickSearchButton} />
        <Preloader isLoading={isLoading} />
        <section className={classNameCardsList}>
          <MoviesCardList
            addMovie={addMovie}
            deletMovie={deletMovie}
            savedMovies={savedMovies}
            loadSavedMovies={loadSavedMovies}
            quantity={quantity}
            isLoading={isLoading}
            cardsMovies={movies} />
          <button onClick={handleButtonMore} className={classNameButton}>Ещё</button>
        </section>
      </main>
      <Footer />
    </>
  )
}