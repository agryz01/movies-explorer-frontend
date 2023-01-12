import './Login.css'
import Form from "../Form/Form";
import Header from '../Header/Header';
import useFormWithValidation from '../../hooks/UseForm';


export default function Login(props) {

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values, errors, isValid);
    props.handleLogin(values);
    // resetForm();
  }
  return (
    <div className="login">
      <Header
        className={'header-form'} />
      <Form
        title={'Рады видеть!'}
        subtitle={'Ещё не зарегистрированы?'}
        button={'Войти'}
        toLink={'/signup'}
        link={'Регистрация'}
        onSubmit={handleSubmit}
        disabled={isValid ? '' : 'disabled'}>
        <label className='form__field'>
          <span className='form__input-name'>E-mail</span>
          <input onChange={handleChange} type="email" name="email" id="email-input" value={values.email || ''} required className='form__input' />
          <span className='form__error'>{errors.email}</span>
        </label>
        <label className='form__field'>
          <span className='form__input-name'>Пароль</span>
          <input onChange={handleChange} type="password" name="password" id="password-input" value={values.password || ''} required className='form__input' />
          <span className='form__error'>{errors.password}</span>
        </label>
      </Form>
    </div>
  )
}