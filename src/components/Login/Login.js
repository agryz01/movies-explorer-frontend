import './Login.css'
import Form from "../Form/Form";
import useFormWithValidation from '../../hooks/UseForm';
import Logo from '../Logo/Logo';


export default function Login(props) {

  const { values, handleChange, errors, isValid } = useFormWithValidation({});

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleLogin(values);
  }
  return (
    <div className="login">
      <div className='login__logo'>
    <Logo />
  </div>
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