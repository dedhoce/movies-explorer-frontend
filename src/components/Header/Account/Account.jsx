import './Account.css';
import { NavLink } from 'react-router-dom';

export default function Account() {
    return (
        <div className="account">
          Аккаунт
          <NavLink to="/profile" className="account__icon"></NavLink>
        </div>
    )
}