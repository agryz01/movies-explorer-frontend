import './Portfolio.css';

export default function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <a href='https://agryz01.github.io/how-to-learn/' target="_blank" rel="noreferrer" className='portfolio__link-conteiner underline'>
        <h3 className='portfolio__link-title'>Статичный сайт</h3>
        <div className='portfolio__link-img'></div>
      </a>
      <a href='https://agryz01.github.io/russian-travel/index.html' target="_blank" rel="noreferrer" className='portfolio__link-conteiner underline'>
        <h3 className='portfolio__link-title'>Адаптивный сайт</h3>
        <div className='portfolio__link-img'></div>
      </a>
      <a href='https://agryz.students.nomoredomains.icu' target="_blank" rel="noreferrer" className='portfolio__link-conteiner'>
        <h3 className='portfolio__link-title'>Одностраничное приложение</h3>
        <div className='portfolio__link-img'></div>
      </a>
    </section>
  )
}