import React from 'react';
import logo from '../../images/chit-chat.svg';
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.mainHeader}>
      <a href="/"><img className={s.logo} src={logo} alt="logo"/></a>
    </header>
  )
};

export default Header