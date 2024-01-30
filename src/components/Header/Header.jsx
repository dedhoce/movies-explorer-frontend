import './Header.css';
import Logo from './Logo/Logo';
import Account from './Account/Account';
import Menu from '../Menu/Menu';
import { NavLink, useLocation } from 'react-router-dom';
import { useWindowDimensions } from '../../utils/hoocks/useWindowDimensions';
import { useState } from 'react';

export default function Header({ isLogin }) {
  const location = useLocation();

  const { width } = useWindowDimensions();

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function openMenu() {
    setIsOpenMenu(true);
  }
  function closeMenu() {
    setIsOpenMenu(false);
  }

  return (
    <header
      className={`header ${location.pathname !== '/' ? 'header_dark' : ''}`}
    >
      {width <= 768 && width >= 320 ? (
        <>
          <Logo />
          <button
            onClick={openMenu}
            className={`header__menu ${
              location.pathname !== '/' ? 'header__menu_dark' : ''
            }`}
          ></button>
          <Menu isOpenMenu={isOpenMenu} closeMenu={closeMenu} />
        </>
      ) : isLogin ? (
        <>
          <div className="header__logo-nav">
            <Logo />
            <nav className="header__links">
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  `header__link ${isActive ? 'header__link_active' : ''}`
                }
              >
                Фильмы
              </NavLink>
              <NavLink
                to="/saved-movies"
                className={({ isActive }) =>
                  `header__link ${isActive ? 'header__link_active' : ''}`
                }
              >
                Сохраненые фильмы
              </NavLink>
            </nav>
          </div>
          <Account />
        </>
      ) : (
        <>
          <Logo />
          <nav className="header__buttons">
            <NavLink
              to="/signup"
              className="header__button header__button_signup"
            >
              Регистрация
            </NavLink>
            <NavLink
              to="/signin"
              className="header__button header__button_signin"
            >
              Войти
            </NavLink>
          </nav>
        </>
      )}
    </header>
  );
}
