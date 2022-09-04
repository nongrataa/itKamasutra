import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    addMessageActionCreator,
    onMessageTextChangeActionCreator,
} from "../../redux/state";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id}/>
    })

    let messagesElements = props.state.messagesData.map((message) => {
        return <Message message={message.message} id={message.id}/>
    })

    let newMessageElement = React.createRef()

    let onSendMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onMessageTextChange = ()=>{
        let text = newMessageElement.current.value;
        let action=onMessageTextChangeActionCreator(text)
        props.dispatch(action)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div>
                    <div>
                        <textarea onChange={onMessageTextChange} ref={newMessageElement} placeholder="Send your message" value={props.state.newMessageText} cols="80" rows="10"></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessage}>SEND</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs