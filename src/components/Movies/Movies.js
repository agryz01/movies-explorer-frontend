import './Movies.css';
import getMoviesApi from '../../utils/MoviesApi';
import SearchForm from '../SearchForm/SearchForm';
import searshMovies from '../searshMovies/searshMovies';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import React from 'react';
import Preloader from '../Preloader/Preloader';

export default function Movies(props) {

  const [movies, setMovies] = React.useState(localStorage.foundMovies ? JSON.parse(localStorage.foundMovies) : []);
  const [add, setAdd] = React.useState(3);
  const [quantity, setGuantity] = React.useState(12);
  const [isLoading, setIsLoading] = React.useState(false);
  const classNameButton = movies.length >= quantity ? ((movies.length <= quantity) ? 'movies-list__more' : 'movies-list__more movies-list__more_active') : 'movies-list__more';
  const classNameCardsList = isLoading ? 'movies__cardsList' : 'movies__cardsList_active';

  // const start = setTimeout(() => {
  //   let width = document.documentElement.clientWidth;
  //   if (width < 628) {
  //     setAdd(2);
  //     setRow(5)
  //   } else {
  //     if (width > 981) {
  //       setAdd(3);
  //       setRow(12)
  //     } else {
  //       setAdd(2);
  //       setRow(8)
  //     }
  //   }
  //   console.log(width, add, row);
  // }, 100);

  const start = () => {
    let width = document.documentElement.clientWidth;
    if (width < 628) {
      setAdd(2);
      setGuantity(5);
    } else {
      if (width > 981) {
        setAdd(3);
        setGuantity(12);
      } else {
        setAdd(2);
        setGuantity(8);
      }
    }
    console.log(width, add, quantity);
  }

  window.addEventListener('resize', start);

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
        setGuantity(12);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  const handleButtonMore = () => {
    setGuantity(quantity + add);
  }

  // const textMessage = isValid? 'Ничего не найдено': 'Нужно ввести ключевое слово';

  return (
    <>
      <Header
        className={'header'}
        loggedIn={props.loggedIn} />
      <main className='movies'>
        <SearchForm
          ClickSearchButton={handleClickSearchButton} />
        <Preloader isLoading={isLoading} />
        <section className={classNameCardsList}>
          <MoviesCardList
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