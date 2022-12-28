import { NavLink } from 'react-router-dom';
import AccountLink from '../AccountLink/AccountLink';
import './Navigation.css';

export default function Navigation(props) {
  return (
    <>
      <nav className='navigation__link-conteiner'>
        <NavLink to={'/movies'} activeClassName='navigation__link_active' className='navigation__link'>Фильмы</NavLink>
        <NavLink to={'/saved-movies'} activeClassName='navigation__link_active' className='navigation__link  navigation__link_padding-right'>Сохраненные фильмы</NavLink>
        <AccountLink />
      </nav>
      <div onClick={props.onBurgerMenu} className='navigation__burger' />
    </>

  )
}