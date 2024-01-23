import './AboutProject.css'

export default function AboutProject() {
    return (
        <div className="about-project">
            <a name="about-project" ></a>            
            <h3 className="title">О проекте</h3>                       
            <div className="about-project__info">
                <div className="about-project__info-block">
                    <h4 className="about-project__info-block-title">Дипломный проект включал 5 этапов</h4>
                    <p className="about-project__info-block-caption">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__info-block">
                    <h4 className="about-project__info-block-title">На выполнение диплома ушло 5 недель</h4>
                    <p className="about-project__info-block-caption">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>                
            </div>
            <div className="about-project__visual-block">
                <div className="about-project__visual about-project__visual_backend">
                    <p className="about-project__visual-term about-project__visual-term_backend">1 неделя</p>
                    <p className="about-project__visual-title">Back-end</p>
                </div>
                <div className="about-project__visual about-project__visual_frontend">
                    <p className="about-project__visual-term">4 недели</p>
                    <p className="about-project__visual-title">Front-end</p>
                </div>
            </div>
        </div>
    )
}