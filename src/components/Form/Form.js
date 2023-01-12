import { Link } from "react-router-dom";
import './Form.css';

export default function Form(props) {
  const classNameButton = props.disabled? 'form__button form__button_disabled': 'form__button';
  
  return (
    <form onSubmit={props.onSubmit} method="post" noValidate className='form'>
      <div className="form__conteiner">
        <h1 className='form__title'>{props.title}</h1>
        {props.children}
      </div>
      <div className="form__conteiner">
        <button type='submit' disabled={props.disabled} className={classNameButton}>{props.button}</button>
        <span className='form__subtitle'>
          {props.subtitle}
          <Link to={props.toLink} className='form__link'>{props.link}</Link>
        </span>
      </div>
    </form>
  )
}
