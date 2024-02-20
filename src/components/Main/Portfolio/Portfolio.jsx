import './Portfolio.css';
import { NavLink } from 'react-router-dom';
import profileFoto from '../../../image/my-foto.jpg';
import Link from './Link/Link';

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h3 className="title title_portfolio">Студент</h3>
      <div className="portfolio__block-info-foto">
        <div className="portfolio__block">
          <h2 className="portfolio__block-name">Андрей Мелицков</h2>
          <h4 className="portfolio__block-info">Front-end developer, 31 лет</h4>
          <p className="portfolio__block-about-me">
            Я родился в Узбекистане, вырос в Оренбурге, живу в Королеве
            Московской области. Окончил НИТУ МИСиС в 2019г. Во время учебы
            заметил, что понравился курс программирования. Спустя время я только
            решил именно это в себе развивать, так как пути с прежней идеей
            разошлись. Решительность и целеустремленность помогают мне
            развиваться и решатьь новые задачи.{' '}
          </p>
          <Link
            to="https://github.com/dedhoce?tab=repositories"
            text="Github"
          />
        </div>
        <img
          src={profileFoto}
          alt="Фотография моя в резюме"
          className="portfolio__foto"
        />
      </div>
      <p className="portfolio__list-title">Портфолио</p>
      <nav className="portfolio__list-link">
        <NavLink
          to="https://github.com/dedhoce/how-to-learn"
          target="_blank"
          className="portfolio__link"
        >
          <h2 className="portfolio__link-title">Статичный сайт</h2>
          <div className="portfolio__link-arrow"></div>
        </NavLink>
        <NavLink
          to="https://dedhoce.github.io/russian-travel/"
          target="_blank"
          className="portfolio__link"
        >
          <h2 className="portfolio__link-title">Адаптивный сайт</h2>
          <div className="portfolio__link-arrow"></div>
        </NavLink>
        <NavLink
          to="https://dedhoce.github.io/react-mesto-auth"
          target="_blank"
          className="portfolio__link"
        >
          <h2 className="portfolio__link-title">Одностраничное приложение</h2>
          <div className="portfolio__link-arrow"></div>
        </NavLink>
      </nav>
    </section>
  );
}
