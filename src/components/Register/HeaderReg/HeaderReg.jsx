import './HeaderReg.css' 
import Logo from '../../Header/Logo/Logo'

export default function HeaderReg({title}) {
    return (
        <div className="header-reg">            
            <Logo />
            <h2 className="header-reg__title">{title}</h2>
        </div>
    )
}