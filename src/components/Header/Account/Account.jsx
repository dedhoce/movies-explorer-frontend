import './Account.css';
import { NavLink } from 'react-router-dom';

export default function Account({closeMenu}) {
  return (
    <NavLink to="/profile" className="account" onClick={closeMenu ? closeMenu : ''}>
      Аккаунт
      <div className="account__icon"></div>
    </NavLink>
  );
}
