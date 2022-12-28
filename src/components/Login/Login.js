import './Login.css'
import Form from "../Form/Form";
import Header from '../Header/Header';


export default function Login() {
  return (
    <div className="login">
      <Header
        className={'header-form'} />
      <Form
        title={'Рады видеть!'}
        subtitle={'Ещё не зарегистрированы?'}
        button={'Войти'}
        toLink={'/signup'}
        link={'Регистрация'}>
      </Form>
    </div>
  )
}