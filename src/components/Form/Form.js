import { Link } from "react-router-dom";
import './Form.css';

export default function Form(props) {
  return (
    <form className='form'>
      <div className="form__conteiner">
        <h1 className='form__title'>{props.title}</h1>
        {props.children}
        <label className='form__field'>
          <span className='form__input-name'>E-mail</span>
          <input type="email" name="email" id="email-input" value={'agryz@yandex.ru'} className='form__input' />
          <span className='form__error'>Что-то пошло не так</span>
        </label>
        <label className='form__field'>
          <span className='form__input-name'>Пароль</span>
          <input type="password" name="password" id="password-input" className='form__input' />
          <span className='form__error form__error_active'>Что-то пошло не так</span>
        </label>
      </div>
      <div className="form__conteiner">
        <button type='submit' className='form__button'>{props.button}</button>
        <span className='form__subtitle'>
          {props.subtitle}
          <Link to={props.toLink} className='form__link'>{props.link}</Link>
        </span>
      </div>
    </form>
  )
}
