import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map((dialog)=>{
        return <DialogItem name={dialog.name} id={dialog.id}/>
    })

    let messagesElements = props.state.messagesData.map((message)=>{
        return <Message message={message.message} id={message.id}/>
    })

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs