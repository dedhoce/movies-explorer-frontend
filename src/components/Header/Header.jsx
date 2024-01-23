
import './Header.css';
import Logo from './Logo/Logo';
import Account from './Account/Account';
import Menu from '../Menu/Menu';
import { NavLink } from 'react-router-dom';
import { useWindowDimensions } from '../../utils/hoocks/useWindowDimensions'
import { useState } from 'react';
  

export default function Header({ isLogin }) {
  const { width } = useWindowDimensions()

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  function openMenu() {
    setIsOpenMenu(true)
  }
  function closeMenu() {
    setIsOpenMenu(false)
  }

  return (
    <div className="header">      
        {isLogin ? (
          width <= 768 && width >= 320 ?
          (
            <>
              <Logo />
              <button onClick={openMenu} className="header__menu"></button>
              <Menu isOpenMenu={isOpenMenu}  closeMenu={closeMenu}/>
            </>
          ) : 
          (
          <>
            <div className="header__logo-nav">
              <Logo />
              <nav className="header__links">
                <NavLink
                  to="/movies"
                  className={({ isActive }) =>
                    `header__link ${isActive ? 'header__link_active' : ''}`}>
                  Фильмы
                </NavLink>
                <NavLink
                  to="/saved-movies"
                  className={({ isActive }) =>
                    `header__link ${isActive ? 'header__link_active' : ''}`}>
                  Сохраненые фильмы
                </NavLink>
              </nav>
            </div>
            <Account />
          </>
          )
        ) : (
          <>
            <Logo />
            <div className="header__buttons">
              <button className="header__button-signup">Регистрация</button>
              <button className="header__button-signin">Войти</button>
            </div>
          </>
        )}
      
    </div>
  );
}
