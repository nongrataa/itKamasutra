import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    let isActiveLink = (select=>select.isActive?style.active_link:style.item)


    return (
        <nav className={style.nav}>
            <div className={style.item}><NavLink to="/profile" className={isActiveLink}>PROFILE</NavLink></div>
            <div className={style.item}><NavLink to="/dialogs" className={isActiveLink}>MESSAGES</NavLink></div>
            <div className={style.item}><NavLink to="/news" className={isActiveLink}>NEWS</NavLink></div>
            <div className={style.item}><NavLink to="/music" className={isActiveLink}>MUSIC</NavLink></div>
            <div className={style.item}><NavLink to="/settings" className={isActiveLink}>SETTINGS</NavLink></div>
        </nav>
    )
}

export default Navbar