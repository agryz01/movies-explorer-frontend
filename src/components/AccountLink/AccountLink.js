import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './AccountLink.css';

export default function AccountLink() {
  return (
    <Link to={'/profile'} className='account__link'>
      Аккаунт
      <div className='navigation__link-icon' />
    </Link>
  )
}