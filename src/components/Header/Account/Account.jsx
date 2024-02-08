import './Account.css';
import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import { useContext } from 'react';

export default function Account({closeMenu}) {
  //подписываемся на контекст стэйта с данными пользователя
  const currentUser = useContext(CurrentUserContext)
  return (
    <NavLink to="/profile" className="account" onClick={closeMenu ? closeMenu : ''}>
      {currentUser.name || 'Account'}
      <div className="account__icon"></div>
    </NavLink>
  );
}
