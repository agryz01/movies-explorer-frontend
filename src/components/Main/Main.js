import { Link } from 'react-router-dom';
import './Main.css';
import Header from "../Header/Header"
import Promo from "../Promo/Promo";
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

export default function Main() {
  return (
    <>
      <Header
        className={'header'}>
        <nav className='header__link-conteiner'>
          <Link to={'/signup'} className='header__link' >Регистрация</Link>
          <Link to={'/signin'} className='header__link'>
            <button className='header__link-button'>Войти</button>
          </Link>
        </nav>
      </Header>
      <main className="content">
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  )
} 