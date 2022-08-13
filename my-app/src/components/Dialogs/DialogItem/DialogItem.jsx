import style from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={"/dialogs/1"+props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem