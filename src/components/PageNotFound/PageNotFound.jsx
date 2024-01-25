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
            <caption className="page__caption">Страница не найдена</caption>            
            <NavLink className="page__link" onClick={handleReturnBack}>Назад</NavLink>
        </section>
    )
}