import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsData = [
        {id:1, name:"Sasha"},
        {id:2, name:"Dima"},
        {id:3, name:"Vasiliy"},
        {id:4, name:"Polina"},
        {id:5, name:"Nikolay"},
        {id:6, name:"Masha"},
        {id:7, name:"Olga"}
    ]

    let messagesData=[
        {id:1, message:'Hi'},
        {id:1, message:'How are you?'},
        {id:1, message:'Where are your from?'},
        {id:1, message:'I am fine, thanks.'},
        {id:1, message:'I work in Belarus.'},
        {id:1, message:'I learn ReactJS.'},
        {id:1, message:'I am from Belarus, but i work in Poland'},
    ]

    let dialogsElements = dialogsData.map((dialog)=>{
        return <DialogItem name={dialog.name} id={dialog.id}/>
    })

    let messagesElements = messagesData.map((message)=>{
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