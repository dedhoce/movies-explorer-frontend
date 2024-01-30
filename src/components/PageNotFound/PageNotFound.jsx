import './PageNotFound.css';
import { NavLink } from 'react-router-dom';

export default function PageNotFound() {
    function handleReturnBack() {
       if(window.history.length > 2) {
        window.history.back();
       }
    }

    return (
        <section className="page">
            <h1 className="page__title">404</h1>
            <p className="page__caption">Страница не найдена</p>            
            <NavLink className="page__link" onClick={handleReturnBack}>Назад</NavLink>
        </section>
    )
}