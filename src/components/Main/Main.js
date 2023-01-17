import './Main.css';
import Header from "../Header/Header"
import Promo from "../Promo/Promo";
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

export default function Main(props) {
  return (
    <>
      <Header
        className={'header'}
        loggedIn={props.loggedIn} />
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