import './AboutMe.css';
import '../Title/Title.css';

export default function AboutMe() {
  return (
    <section className='about-me' id='student'>
      <h2 className='title'>Студент</h2>
      <div className='about-me__student'>
        <div className='about-me__student-conteiner'>
          <h3 className='about-me__student-title'>Алексей</h3>
          <p className='about-me__student-subtitle'>Фронтенд-разработчик, 39 лет</p>
          <p className='about-me__student-text'>Я родился и живу в г. Туле, закончил ТулГУ по специальности "Технология полиграфического и упаковочного производства". У меня есть жена
            и дочь. До недавнего времени занимался геодезией и картографией. Увлекаюсь экстремальными видами спорта. В этом году решил попробовать себя в веб-разработке.</p>
          <a href='https://github.com/agryz01' target="_blank" rel='noreferrer' className='about-me__student-link'>Github</a>
        </div>
        <div className='about-me__student-img'></div>
      </div>
    </section>
  )
}