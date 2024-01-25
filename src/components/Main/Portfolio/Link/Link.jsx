import './Link.css';
import { NavLink } from 'react-router-dom';

export default function Link({ placeFooter, text, to }) {
  return (
    <NavLink
      to={to}
      target="_blank"
      className={`link ${placeFooter ? placeFooter : ''}`}
    >
      {text}
    </NavLink>
  );
}
