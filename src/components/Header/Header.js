import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.css';

export default function Header(props) {
  return (
    <header className='header'>
      <Logo />
      <Navigation
        loggedIn={props.loggedIn} />
    </header >
  )
}