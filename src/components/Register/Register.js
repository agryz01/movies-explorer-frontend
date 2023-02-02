import React from 'react';
import Form from '../Form/Form';
import Logo from '../Logo/Logo';
import './Register.css';
import { useForm } from 'react-hook-form';
import { isEmail } from 'validator';

export default function Register(props) {

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: "onChange" });

  React.useEffect(() => props.setServerErrMessage(null), []);

  const onSubmit = (data) => {
    props.handleRegistering(data);
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
        onSubmit={handleSubmit(onSubmit)}
        serverErrMessage={props.serverErrMessage}
        disabled={isValid ? '' : 'disabled'}>
        <label className='form__field'>
          <span className='form__input-name'>Имя</span>
          <input {...register('name', {
            required: 'это поле обязательно к заполнению',
            minLength: {
              value: 2,
              message: 'минимальная длинна 2 символа'
            },
            maxLength: {
              value: 30,
              message: 'максимальная длинна 30 символов'
            }
          }
          )} className='form__input' />
          <span className='form__error'>{errors.name?.message}</span>
        </label>
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