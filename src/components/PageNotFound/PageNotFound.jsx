import './PageNotFound.css';

export default function PageNotFound() {
    function handleReturnBack() {
       if(window.history.length > 2) {
        window.history.back();
       }
    }

    return (
        <div className="page">
            <h1 className="page__title">404</h1>
            <caption className="page__caption">Страница не найдена</caption>
            <a href="#" className="page__link" onClick={handleReturnBack}>Назад</a>
        </div>
    )
}