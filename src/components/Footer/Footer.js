import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className='footer__conteiner'>
        <p className="footer__copyright">© {new Date().getFullYear()}</p>
        <div className='footer__link-conteiner'>
          <a href='https://practicum.yandex.ru/' target="_blank" rel="noreferrer" className='footer__link'>Яндекс.Практикум</a>
          <a href='https://github.com/' target="_blank" rel="noreferrer" className='footer__link'>Github</a>
        </div>
      </div>
    </footer>
  )
}