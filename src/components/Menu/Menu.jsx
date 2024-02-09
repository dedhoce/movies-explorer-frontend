import './Menu.css';
import { NavLink } from 'react-router-dom';
import Account from '../Header/Account/Account';
import { useContext, useEffect } from 'react';
import { LoggedInContext } from '../../contexts/LoggedInContext';

export default function Menu({ isOpenMenu, closeMenu }) {
  const loggedIn = useContext(LoggedInContext);
  useEffect(() => {
    function closePopupByEsc(key) {
      if (key.key === 'Escape') {
        closeMenu();
      }
    }
    function closePopupByClickOverlay(e) {
      if (e.target.classList.contains('menu')) {
        closeMenu();
      }
    }
    if (isOpenMenu) {
      document.addEventListener('keydown', closePopupByEsc);
      document.addEventListener('click', closePopupByClickOverlay);
      return () => {
        document.removeEventListener('keydown', closePopupByEsc);
        document.removeEventListener('click', closePopupByClickOverlay);
      };
    }
  }, [isOpenMenu]);

  return (
    <div className={`menu ${isOpenMenu ? 'menu_active' : ''}`}>
      <button onClick={closeMenu} className="menu__close"></button>
      {loggedIn ? (
        <>
          <nav className="menu__links">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `menu__link ${isActive ? 'menu__link_active' : ''}`
              }
              onClick={closeMenu}
            >
              Главная
            </NavLink>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `menu__link ${isActive ? 'menu__link_active' : ''}`
              }
              onClick={closeMenu}
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className={({ isActive }) =>
                `menu__link ${isActive ? 'menu__link_active' : ''}`
              }
              onClick={closeMenu}
            >
              Сохраненые фильмы
            </NavLink>
          </nav>
          <Account closeMenu={closeMenu} />
        </>
      ) : (
        <nav className="menu__links">
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `menu__link ${isActive ? 'menu__link_active' : ''}`
            }
          >
            Регистрация
          </NavLink>
          <NavLink
            to="/signin"
            className={({ isActive }) =>
              `menu__link ${isActive ? 'menu__link_active' : ''}`
            }
          >
            Войти
          </NavLink>
        </nav>
      )}
    </div>
  );
}
