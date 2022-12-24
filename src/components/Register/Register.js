import Form from '../Form/Form';
import Header from '../Header/Header';
import './Register.css';

export default function Register() {
  return (
    <div className='register'>
      <Header
        className={'header-form'} />
      <Form
        title={'Добро пожаловать!'}
        subtitle={'Уже зарегестрированы?'}
        button={'Зарегистрироваться'}
        toLink={'/signin'}
        link={'Войти'}>
        <label className='form__field'>
          <span className='form__input-name'>Имя</span>
          <input type="text" name="name" id="name-input" value={'Алексей'} className='form__input' />
          <span className='form__error' />
        </label>
      </Form>
    </div>
  )
}