import { Link } from "react-router-dom";
import './Logo.css';

export default function Logo() {
  return (
    <Link to={'/'}>
      <div className='logo' />
    </Link>
  )
}