import React from 'react'
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
  return (
    <nav className={s.mainMenu}>
      <ul className={s.mainMenuList}>
        <li className={s.mainMenuItem}>
          <NavLink className={s.mainMenuLink} to="/profile" activeClassName={s.active}>
            Profile
          </NavLink>
        </li>
        <li className={s.mainMenuItem}>
          <NavLink className={s.mainMenuLink} to="/audio" activeClassName={s.active}>
            Audio
          </NavLink>
        </li>
        <li className={s.mainMenuItem}>
          <NavLink className={s.mainMenuLink} to="/photos" activeClassName={s.active}>
            Photos
          </NavLink>
        </li>
        <li className={s.mainMenuItem}>
          <NavLink className={s.mainMenuLink} to="/video" activeClassName={s.active}>
            Video
          </NavLink>
        </li>
        <li className={s.mainMenuItem}>
          <NavLink className={s.mainMenuLink} to="/dialogs" activeClassName={s.active}>
            Messages
          </NavLink>
        </li>
        <li className={s.mainMenuItem}>
          <NavLink className={s.mainMenuLink} to="/setting" activeClassName={s.active}>
            Setting
          </NavLink>
        </li>
      </ul>
    </nav>
  )
};

export default Nav;