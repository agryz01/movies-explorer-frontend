import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Navigation from '../Navigation/Navigation';
import './Header.css';

export default function Header(props) {
  return (
    <header className='header'>
      <Switch>
        <Route exact path={'/'}>
          <Link to={'/'} className='header__logo' />
          <nav className='header__link-conteiner'>
            <Link to={'/signup'} className='header__link' >Регистрация</Link>
            <Link to={'/signin'} className='header__link'>
              <button className='header__link-button'>Войти</button>
            </Link>
          </nav>
        </Route>
        <Route path={'/movies'}>
          <Link to={'/'} className='header__logo' />
          <Navigation onBurgerMenu={props.onBurgerMenu} />
        </Route>
        <Route path={'/saved-movies'}>
          <Link to={'/'} className='header__logo' />
          <Navigation onBurgerMenu={props.onBurgerMenu} />
        </Route>
        <Route path={'/profile'}>
          <Link to={'/'} className='header__logo' />
          <Navigation onBurgerMenu={props.onBurgerMenu} />
        </Route>
      </Switch>
    </header >
  )
}