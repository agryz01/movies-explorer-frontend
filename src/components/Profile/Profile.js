import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import './Profile.css';
import { useForm } from 'react-hook-form';
import { isEmail } from 'validator';

export default function Profile(props) {

  const currentUser = React.useContext(CurrentUserContext);
  const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({
    mode: "onChange",
    defaultValues: {
      name: currentUser.name,
      email: currentUser.email
    }
  });

  const classNameConteinerBottom = props.editProfile ? 'profile__conteiner-bottom' : 'profile__conteiner-bottom profile__conteiner-bottom_visible';
  const inputDisabled = props.editProfile ? '' : 'disabled';

  React.useEffect(() => {
    props.setEditProfile(false);
    props.setServerErrMessage(null);
  }, [])

  const togleButton = () => props.setEditProfile(!props.editProfile);

  const onSubmit = (data) => {
    props.handleUpdateUser(data);
  }

  return (
    <>
      <Header loggedIn={props.loggedIn}>
      </Header>
      <form onSubmit={handleSubmit(onSubmit)} className='profile'>
        <div className='profile__conteiner'>
          <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
          <label className='profile__input-conteiner underline'>
            <span className='profile__input-title'>Имя</span>
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
            )} disabled={inputDisabled} placeholder={'укажите имя'} className='profile__input' />
            <span className='profile__error'>{errors.name?.message}</span>
          </label>
          <label className='profile__input-conteiner'>
            <span className='profile__input-title'>E-mail</span>
            <input {...register('email', {
              required: 'это поле обязательно к заполнению',
              validate: (input) => isEmail(input) || 'укажите адрес email'
            })} disabled={inputDisabled} placeholder={'укажите email'} className='profile__input' />
            <span className='profile__error'>{errors.email?.message}</span>
          </label>
        </div>
        <div className='profile__conteiner'>
          <span className='form__error-server'>{props.serverErrMessage}</span>
          <button type='submit' disabled={
            isValid ? (watch('name') === currentUser.name && watch('email') === currentUser.email ? 'disabled' : '') : 'disabled'
          }
            className={
              props.editProfile ? (isValid ? (watch('name') === currentUser.name && watch('email') === currentUser.email ? 'profile__button profile__button_visible profile__button_disabled' : 'profile__button profile__button_visible') : 'profile__button profile__button_visible profile__button_disabled') : 'profile__button'
            }>Сохранить</button>
          <div className={classNameConteinerBottom}>
            <span onClick={togleButton} className='profile__edit'>Редактировать</span>
            <span onClick={props.handleExit} className='profile__exit'>Выйти из аккаунта</span>
          </div>
        </div>
      </form>
    </>
  )
}