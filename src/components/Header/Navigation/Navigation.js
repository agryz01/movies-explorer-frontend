import { NavLink, Route, Switch } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  return (
    <Switch>
      <Route exact path='/'>
        <nav className='Navigation__link-conteiner'>
          <NavLink to={'/signup'} className='Navigation__link' >Регистрация</NavLink>
          <NavLink to={'/signin'} className='Navigation__link'>
            <button className='Navigation__link-button'>Войти</button>
          </NavLink>
        </nav>
      </Route>
      <Route path='/movies'>
        <nav className='Navigation__link-conteiner'>
          <NavLink to={'/'} className='Navigation__link'>Фильмы</NavLink>
          <NavLink to={'/'} className='Navigation__link'>Сохраненные фильмы</NavLink>
          <NavLink to={'/'} className='Navigation__link-acaunt'>
            <span className='Navigation__link'>Аккаунт</span>
            <div className='Navigation__link-icon' />
          </NavLink>
        </nav>
      </Route>
    </Switch>
  )
}