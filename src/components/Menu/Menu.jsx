import './Menu.css';
import { NavLink } from 'react-router-dom';
import Account from '../Header/Account/Account';
import { useEffect } from 'react';

export default function Menu({isOpenMenu, closeMenu}) {
  useEffect(() => {
    function closePopupByEsc (key) {    
        if (key.key === 'Escape') {
          closeMenu()
        }
    }
    function closePopupByClickOverlay (e) {
        if (e.target.classList.contains('menu')) {
          closeMenu()
        }
    }
    if(isOpenMenu) {
        document.addEventListener("keydown", closePopupByEsc);
        document.addEventListener('click', closePopupByClickOverlay);
        return () => {
            document.removeEventListener("keydown", closePopupByEsc);
            document.removeEventListener('click', closePopupByClickOverlay);
        }
    }   
}, [isOpenMenu])

  return (
    <section className={`menu ${isOpenMenu ? "menu_active" : ""}`}>
      <button onClick={closeMenu} className='menu__close'></button>
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
      <Account closeMenu={closeMenu}/>
    </section>
  );
}
