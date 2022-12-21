import './AboutProject.css';
import '../Title/Title.css';

export default function AboutProject() {
  return (
    <section className='about-pr' id='about-pr'>
      <h2 className='title'>О проекте</h2>
      <div className='about-pr__stages'>
        <div className='about-pr__stages-conteiner'>
          <h3 className='about-pr__stages-title'>Дипломный проект включал 5 этапов</h3>
          <p className='about-pr__stages-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='about-pr__stages-conteiner'>
          <h3 className='about-pr__stages-title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-pr__stages-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='about-pr__chart'>
        <h3 className='about-pr__chart-title about-pr__chart-title_back-col_green'>1 неделя</h3>
        <h3 className='about-pr__chart-title'>4 недели</h3>
        <span className='about-pr__chart-text'>Back-end</span>
        <span className='about-pr__chart-text'>Front-end</span>
      </div>
    </section>
  )
}