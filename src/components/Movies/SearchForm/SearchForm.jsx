import { useState } from 'react'
import './SearchForm.css'

export default function SearchForm() {
    const [isActiveFilter, setIsActiveFilter] = useState(false)

    function handleFilterToogle() {
        isActiveFilter ? setIsActiveFilter(false) : setIsActiveFilter(true)
    }

    return (
        <div className="search-form">
            <input type="text" className="search-form__input" placeholder="Фильм"/>
            <button className="search-form__submit"></button>
            <div className="search-form__filter">
                <button onClick={handleFilterToogle} className={"search-form__filter-button" + (isActiveFilter ? " search-form__filter-button_active" : "")}></button>
                <span className="earch-form__filter-title">Короткометражки</span>
            </div>
        </div>
    )
}