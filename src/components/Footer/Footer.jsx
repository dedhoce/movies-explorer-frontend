import './Footer.css'

export default function Footer() {
    return (
        <div className="footer">
            <caption className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</caption>
            <ul className="footer__info">
                <li className="footer__item">&copy; {new Date().getFullYear()}</li>
                <ul className="footer__stack">
                    <li className="footer__item">Яндекс.Практикум</li>
                    <li className="footer__item">Github</li>
                </ul>
            </ul>
        </div>
    )
}