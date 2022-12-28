import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import './NotFound.css';

export default function NotFound() {
  let history = useHistory();

  const goBack = () => {
    history.goBack();
  }
  
  return (
    <div className="not-found">
      <div className='not-found__conteiner'>
        <h1 className="not-found__title">404</h1>
        <h2 className="not-found__subtitle">Страница не найдена</h2>
      </div>
      <button onClick={goBack} className="not-found__button">Назад</button>
    </div>
  )
}