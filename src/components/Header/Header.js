import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from './Navigation/Navigation';

export default function Header() {
  return (
    <header className='header'>
      <Link to={'/'} className='header__logo' />
      <Navigation />
    </header >
  )
}