export default function Header () {
    return (
        <div className="header">
            <logo className="header__logo"></logo>
            <div className="header__buttons">
                <button className="header__button-signup">Регистрация</button>
                <button className="header__button-signin">Войти</button>
            </div>
        </div>
    )
}

