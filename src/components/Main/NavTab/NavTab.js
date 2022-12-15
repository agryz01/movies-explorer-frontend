import { Link } from "react-router-dom";
import './NavTab.css';

export default function NavTab() {
  return (
    <section className="navtab">
      <ul className="list">
        <li className="list__item">
          <a href="#about-pr" className="navtab__link">О проекте</a>
        </li>
        <li className="list__item">
          <a href="#techs" className="navtab__link">Технологии</a>
        </li>
        <li className="list__item">
          <Link to={'#'} className="navtab__link">Студент</Link>
        </li>
      </ul>
    </section>
  )
}