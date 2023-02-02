import './Login.css'
import Form from "../Form/Form";
import Logo from '../Logo/Logo';
import React from 'react';
import { useForm } from 'react-hook-form';
import { isEmail } from 'validator';


export default function Login(props) {

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: "onChange" });

  React.useEffect(() => props.setServerErrMessage(null), []);

  const onSubmit = (data) => {
    console.log(data, isValid);
    props.handleLogin(data);
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
        onSubmit={handleSubmit(onSubmit)}
        serverErrMessage={props.serverErrMessage}
        disabled={isValid ? '' : 'disabled'}>
        <label className='form__field'>
          <span className='form__input-name'>E-mail</span>
          <input {...register('email', {
            required: 'это поле обязательно к заполнению',
            validate: (input) => isEmail(input) || 'укажите адрес email'
          })} className='form__input' />
          <span className='form__error'>{errors.email?.message}</span>
        </label>
        <label className='form__field'>
          <span className='form__input-name'>Пароль</span>
          <input {...register('password', {
            required: 'это поле обязательно к заполнению'
          })} type="password" className='form__input' />
          <span className='form__error'>{errors.password?.message}</span>
        </label>
      </Form>
    </div>
  )
}