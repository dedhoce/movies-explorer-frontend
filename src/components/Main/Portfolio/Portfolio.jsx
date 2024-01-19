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
                    <h2 className="portfolio__block-name">Андрей</h2>
                    <h4 className="portfolio__block-info">Фронтенд-разработчик, 31 год </h4>
                    <caption className="portfolio__block-about-me">Я родился в Узбекистане, вырос в Оренбурге, живу в Королеве. Закончил факультет цветных металов и золота НИТУ МИСиС. У меня есть жена, детей пока нет. Я люблю готовить еду и слушать музыку. С 2021 года работаю в АО 'Композит'. После окончания курса буду искать свое место в мире Фронтенд-разработки.</caption>
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