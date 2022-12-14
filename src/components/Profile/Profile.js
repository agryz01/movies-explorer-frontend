import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import './Profile.css';

export default function Profile(props) {
  return (
    <>
      <Header
        className={'header'}>
        <Navigation
          onBurgerMenu={props.onBurgerMenu} />
      </Header>
      <main className='profile'>
        <h1 className='profile__title'>Привет, Алексей!</h1>
        <div className='profile__conteiner underline'>
          <span className='profile__input-title'>Имя</span>
          <input type="text" name='name' value={'Алексей'} className='profile__input'></input>
        </div>
        <div className='profile__conteiner'>
          <span className='profile__input-title'>E-mail</span>
          <input type="email" name='email' value={'agryz@yandex.ru'} className='profile__input'></input>
        </div>
        <span className='profile__edit'>Редактировать</span>
        <Link to={'/signin'} className='profile__exit'>Выйти из аккаунта</Link>
      </main>
    </>
  )
}