import './Portfolio.css'
import { NavLink } from 'react-router-dom'
import profileFoto from '../../../image/profile-foto.jpg'
import Link from './Link/Link'

export default function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">            
            <h3 className="title title_portfolio">Студент</h3>
            <div className="portfolio__block-info-foto">
                <div className="portfolio__block">
                    <h2 className="portfolio__block-name">Виталий</h2>
                    <h4 className="portfolio__block-info">Фронтенд-разработчик, 30 лет</h4>
                    <p className="portfolio__block-about-me">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <Link to="https://github.com/dedhoce?tab=repositories" text='Github'/>
                </div>
                <img src={profileFoto} alt="Фотография моя в резюме" className="portfolio__foto" />                    
            </div> 
            <p className="portfolio__list-title">Портфолио</p>
            <nav className="portfolio__list-link">
                <NavLink to='https://github.com/dedhoce/how-to-learn' target='_blank' className="portfolio__link">
                    <h2 className="portfolio__link-title">Статичный сайт</h2>
                    <div className="portfolio__link-arrow"></div>
                </NavLink>
                <NavLink to='https://dedhoce.github.io/russian-travel/' target='_blank' className="portfolio__link">
                    <h2 className="portfolio__link-title">Адаптивный сайт</h2>
                    <div className="portfolio__link-arrow"></div>
                </NavLink>
                <NavLink to='https://dedhoce.github.io/react-mesto-auth' target='_blank' className="portfolio__link">
                    <h2 className="portfolio__link-title">Одностраничное приложение</h2>
                    <div className="portfolio__link-arrow"></div>
                </NavLink>
            </nav>  
        </section>
    )
}