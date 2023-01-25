import React from 'react';
import useFormWithValidation from '../../hooks/UseForm';
import Form from '../Form/Form';
import Logo from '../Logo/Logo';
import './Register.css';

export default function Register(props) {

  const { values, handleChange, errors, isValid } = useFormWithValidation({});

  React.useEffect(() => props.setServerErrMessage(null), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleRegistering(values);
  }

  return (
    <div className='register'>
      <div className='register__logo'>
        <Logo />
      </div>
      <Form
        title={'Добро пожаловать!'}
        subtitle={'Уже зарегистрированы?'}
        button={'Зарегистрироваться'}
        toLink={'/signin'}
        link={'Войти'}
        onSubmit={handleSubmit}
        serverErrMessage={props.serverErrMessage}
        disabled={isValid ? '' : 'disabled'}>
        <label className='form__field'>
          <span className='form__input-name'>Имя</span>
          <input onChange={handleChange} type="text" name="name" id="name-input" value={values.name || ''} minLength={2} maxLength={30} required className='form__input' />
          <span className='form__error'>{errors.name}</span>
        </label>
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