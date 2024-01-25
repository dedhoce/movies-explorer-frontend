import './ProfileForm.css' 
import { useState } from 'react'

export default function ProfileForm() {
    const [isActive, setIsActive] = useState(true)

    function handleEdit() {
        isActive ? setIsActive(false) : setIsActive(true)
    }
    return (
        <section className="profile-form">
            <h2 className="profile-form__title">Привет, Андрей!</h2>
            <label className='profile-form__input-label' >
                <span className="profile-form__input-title">Имя</span>
                <input type="text" className='profile-form__input' placeholder='Введите' имя value='Андрей'/>
            </label>
            <label className='profile-form__input-label'>
                <span className="profile-form__input-title">E-mail</span>
                <input type="text" className='profile-form__input' placeholder='Введите e-mail' value='dedhoce@yandex.ru' />
            </label>
            <span className={`profile-form__error ${!isActive ? "profile-form__error_active" : ''}`}>При обновлении профиля произошла ошибка.</span>            
            <button onClick={handleEdit} className={`profile-form__button ${!isActive ? "profile-form__button_disable" : ''}`}>Редактировать</button>
            <button className="profile-form__button profile-form__button_red">Выйти из аккаунта</button>
        </section>
    )
}