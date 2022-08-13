import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <DialogItem name="Sasha" id="1"/>
                <DialogItem name="Dima" id="2"/>
                <DialogItem name="Vasiliy" id="3"/>
                <DialogItem name="Masha" id="4"/>
                <DialogItem name="Polina" id="5"/>
                <DialogItem name="Nikolay" id="6"/>
                <DialogItem name="Olga" id="7"/>
            </div>
            <div className={style.messages}>
                <Message message='Hi'/>
                <Message message='How are you?'/>
                <Message message='Where are your from?'/>
                <Message message='I am fine, thanks.'/>
                <Message message='I work in Belarus.'/>
                <Message message='I learn ReactJS.'/>
            </div>
        </div>
    )
}

export default Dialogs