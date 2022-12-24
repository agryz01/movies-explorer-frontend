import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import AccountLink from '../AccountLink/AccountLink';
import './BurgerMenu.css';


export default function BurgerMenu(props) {
  const className = `burger ${props.isOpen && 'burger_opened'}`;

  return (
    <div className={className}>
      <nav className='burger__menu'>
        <div onClick={props.onBurgerMenu} className='burger__close-icon' />
        <div className='burger__link-conteiner'>
          <NavLink to={'/'} className='burger__link'>Главная</NavLink>
          <NavLink to={'/movies'} activeClassName='burger__link_active' className='burger__link'>Фильмы</NavLink>
          <NavLink to={'/saved-movies'} activeClassName='burger__link_active' className='burger__link'>Сохраненные фильмы</NavLink>
        </div>
        <AccountLink />
      </nav>
    </div>
  )
}