import './Techs.css'

export default function Techs() {
    return (
        <div className="techs" name="techs">
            <a name="techs"></a>
            <h3 className="title title_techs">Технологии</h3>
            <div className="techs__block">
                <h2 className="techs__block-title">7 технологий</h2>
                <p className="techs__block-caption">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="techs__list">
                    <li className="techs__list-item">HTML</li>
                    <li className="techs__list-item">CSS</li>
                    <li className="techs__list-item">JS</li>
                    <li className="techs__list-item">React</li>
                    <li className="techs__list-item">Git</li>
                    <li className="techs__list-item">Express.js</li>
                    <li className="techs__list-item">mongoDB</li>
                </ul>
            </div>            
        </div>
    )
}