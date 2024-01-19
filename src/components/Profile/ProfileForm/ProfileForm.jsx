import './ProfileForm.css' 

export default function ProfileForm() {
    return (
        <div className="profile-form">
            <h2 className="profile-form__title">Привет, Андрей!</h2>
            <label className='profile-form__input-label' >
                <span className="profile-form__input-title">Имя</span>
                <input type="text" className='profile-form__input' value='Андрей'/>
            </label>
            <label className='profile-form__input-label'>
                <span className="profile-form__input-title">E-mail</span>
                <input type="text" className='profile-form__input' value='dedhoce@yandex.ru' />
            </label>            
            <button className="profile-form__button">Редактировать</button>
            <button className="profile-form__button profile-form__button_red">Выйти из аккаунта</button>
        </div>
    )
}