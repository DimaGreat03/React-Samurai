import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";
import React from "react";
import {sendMessageActionCreator, updateMessageActionCreator} from "../Redux/message-reducer";

const Dialogs = (props) => {

    let dialogsElements = props.arrayNames.map(d => <DialogItem name={d.name} id={d.url} img={d.img}/>)
    let dialogMessages = props.arrayMessages.map(m => <DialogMessage message={m.message} textarea={m.textarea}
                                                                     button={m.button}/>)


    let typingText = React.createRef()

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }

    let onMessageChange = () => {
        let text = typingText.current.value
        props.dispatch(updateMessageActionCreator(text))
    }


    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.peoples}>
                    {dialogsElements}
                </div>

                <div className={s.messages}>
                    {dialogMessages}
                </div>
            </div>
            <div className={s.button}>
                <textarea ref={typingText}
                          onChange={onMessageChange}
                          value={props.newMessageText}/>
                <div>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs









