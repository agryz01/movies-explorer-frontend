import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import AccountLink from '../AccountLink/AccountLink';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './Navigation.css';

export default function Navigation(props) {

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);

  function handleBurgerMenuClick() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  return (
    <>
      {props.loggedIn ? (
        <>
          <nav className='navigation__link-conteiner'>
            <NavLink to={'/movies'} activeClassName='navigation__link_active' className='navigation__link'>Фильмы</NavLink>
            <NavLink to={'/saved-movies'} activeClassName='navigation__link_active' className='navigation__link  navigation__link_padding-right'>Сохраненные фильмы</NavLink>
            <AccountLink />
          </nav>
          <div onClick={handleBurgerMenuClick} className='navigation__burger' />
        </>
      ) : (
        <>
          <nav className='header__link-conteiner'>
            <Link to={'/signup'} className='header__link' >Регистрация</Link>
            <Link to={'/signin'} className='header__link'>
              <button className='header__link-button'>Войти</button>
            </Link>
          </nav>
        </>
      )}
      <BurgerMenu
          isOpen={isBurgerMenuOpen}
          onBurgerMenu={handleBurgerMenuClick} />
    </>

  )
}