import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';

export default function Header(props) {
  return (
    <header className={props.className}>
      <Logo />
      {props.children}
    </header >
  )
}