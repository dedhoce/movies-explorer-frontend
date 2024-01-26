import './Footer.css';
import Link from '../Main/Portfolio/Link/Link';
import { useLocation } from 'react-router-dom';

export default function Footer() {
const location = useLocation()
  return (
    location.pathname !==  "/profile" ? 
    (<footer className="footer">
      <p className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__info">
        <p className="footer__item">&copy; {new Date().getFullYear()}</p>
        <nav className="footer__stack">          
          <Link to="https://practicum.yandex.ru/profile/web/" placeFooter='footer__item' text="Яндекс.Практикум"/>       
          <Link to="https://github.com/dedhoce?tab=repositories" placeFooter='footer__item' text="Github"/>
        </nav>
      </div>
    </footer>) : <></>  
  );
}
