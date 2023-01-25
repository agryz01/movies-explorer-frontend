import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useFormWithValidation from '../../hooks/UseForm';
import Header from '../Header/Header';
import './Profile.css';

export default function Profile(props) {

  const currentUser = React.useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid } = useFormWithValidation({});
  const classNameButton = props.editProfile ? (isValid ? (values.name === currentUser.name && values.email === currentUser.email ? 'profile__button profile__button_visible profile__button_disabled' : 'profile__button profile__button_visible') : 'profile__button profile__button_visible profile__button_disabled') : 'profile__button';
  const classNameConteinerBottom = props.editProfile ? 'profile__conteiner-bottom' : 'profile__conteiner-bottom profile__conteiner-bottom_visible';
  const inputDisabled = props.editProfile ? '' : 'disabled';
  const buttonDisabled = isValid ? (values.name === currentUser.name && values.email === currentUser.email ? 'disabled' : '') : 'disabled';

  React.useEffect(() => {
    values.name = currentUser.name;
    values.email = currentUser.email;
    props.setServerErrMessage(null);
  }, []);

  const togleButton = () => props.setEditProfile(!props.editProfile);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleUpdateUser(values);
  }

  return (
    <>
      <Header loggedIn={props.loggedIn}>
      </Header>
      <form onSubmit={handleSubmit} method="post" noValidate className='profile'>
        <div className='profile__conteiner'>
          <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
          <label className='profile__input-conteiner underline'>
            <span className='profile__input-title'>Имя</span>
            <input onChange={handleChange} disabled={inputDisabled} type="text" name='name' value={values.name || ''} placeholder={props.editProfile ? '' : currentUser.name} minLength={2} maxLength={30} required className='profile__input'></input>
            <span className='profile__error'>{errors.name}</span>
          </label>
          <label className='profile__input-conteiner'>
            <span className='profile__input-title'>E-mail</span>
            <input onChange={handleChange} disabled={inputDisabled} type="email" name='email' value={values.email || ''} placeholder={props.editProfile ? '' : currentUser.email} required className='profile__input'></input>
            <span className='profile__error'>{errors.email}</span>
          </label>
        </div>
        <div className='profile__conteiner'>
          <span className='form__error-server'>{props.serverErrMessage}</span>
          <button type='submit' disabled={buttonDisabled} className={classNameButton}>Сохранить</button>
          <div className={classNameConteinerBottom}>
            <span onClick={togleButton} className='profile__edit'>Редактировать</span>
            <span onClick={props.handleExit} className='profile__exit'>Выйти из аккаунта</span>
          </div>
        </div>
      </form>
    </>
  )
}