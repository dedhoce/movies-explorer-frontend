export default function AboutProject() {
    return (
        <div className="about-project">            
            <h3 className="title">О проекте</h3>                       
            <div className="about-project__info">
                <div className="about-project__info-block">
                    <h4 className="about-project__info-block-title">Дипломный проект включал 5 этапов</h4>
                    <caption className="about-project__info-block-caption">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</caption>
                </div>
                <div className="about-project__info-block">
                    <h4 className="about-project__info-block-title">На выполнение диплома ушло 5 недель</h4>
                    <caption className="about-project__info-block-caption">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</caption>
                </div>                
            </div>
            <div className="about-project__visual-block">
                <div className="about-project__visual about-project__visual_backend">
                    <caption className="about-project__visual-term about-project__visual-term_backend">1 неделя</caption>
                    <caption className="about-project__visual-title">Back-end</caption>
                </div>
                <div className="about-project__visual about-project__visual_frontend">
                    <caption className="about-project__visual-term">4 недели</caption>
                    <caption className="about-project__visual-title">Front-end</caption>
                </div>
            </div>
        </div>
    )
}