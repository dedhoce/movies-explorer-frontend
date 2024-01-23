import './Portfolio.css'
import { NavLink } from 'react-router-dom'
import profileFoto from '../../../image/profile-foto.jpg'

export default function Portfolio() {
    return (
        <div className="portfolio">
            <a name="portfolio"></a>
            <h3 className="title title_portfolio">Студент</h3>
            <div className="portfolio__block-info-foto">
                <div className="portfolio__block">
                    <h2 className="portfolio__block-name">Виталий</h2>
                    <h4 className="portfolio__block-info">Фронтенд-разработчик, 30 лет</h4>
                    <p className="portfolio__block-about-me">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <caption className="portfolio__block-stack">Github</caption>
                </div>
                <img src={profileFoto} alt="Фотография моя в резюме" className="portfolio__foto" />                    
            </div> 
            <caption className="portfolio__list-title">Портфолио</caption>
            <nav className="portfolio__list-link">
                <NavLink to='https://github.com/dedhoce/how-to-learn' className="portfolio__link">
                    <h2 className="portfolio__link-title">Статичный сайт</h2>
                    <div className="portfolio__link-arrow"></div>
                </NavLink>
                <NavLink to='https://dedhoce.github.io/russian-travel/' className="portfolio__link">
                    <h2 className="portfolio__link-title">Адаптивный сайт</h2>
                    <div className="portfolio__link-arrow"></div>
                </NavLink>
                <NavLink to='https://dedhoce.github.io/react-mesto-auth' className="portfolio__link">
                    <h2 className="portfolio__link-title">Одностраничное приложение</h2>
                    <div className="portfolio__link-arrow"></div>
                </NavLink>
            </nav>  
        </div>
    )
}