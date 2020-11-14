import React from 'react'
import s from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={s.mainMenu}>
      <ul className={s.mainMenuList}>
        <li className={s.mainMenuItem}><a className={s.mainMenuLink} href="#">
          Home
        </a></li>
        <li className={s.mainMenuItem}><a className={s.mainMenuLink} href="#">
          Message
        </a></li>
        <li className={s.mainMenuItem}><a className={s.mainMenuLink} href="#">
          Setting
        </a></li>
      </ul>
    </nav>
  )
};

export default Nav;