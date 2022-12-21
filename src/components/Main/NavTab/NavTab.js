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
          <a href="#student" className="navtab__link">Студент</a>
        </li>
      </ul>
    </section>
  )
}