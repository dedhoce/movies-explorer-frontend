import './Menu.css';
import { NavLink } from 'react-router-dom';
import Account from '../Header/Account/Account';

export default function Menu({isOpenMenu, closeMenu}) {
  return (
    <div className={`menu ${isOpenMenu ? "menu_active" : ""}`}>
      <button onClick={closeMenu} className='menu__close'></button>
      <nav className="menu__links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `menu__link ${isActive ? 'menu__link_active' : ''}`
          }
        >
          Главная
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            `menu__link ${isActive ? 'menu__link_active' : ''}`
          }
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className={({ isActive }) =>
            `menu__link ${isActive ? 'menu__link_active' : ''}`
          }
        >
          Сохраненые фильмы
        </NavLink>
      </nav>
      <Account />
    </div>
  );
}
