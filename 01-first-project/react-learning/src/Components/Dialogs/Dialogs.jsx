import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";
import React from "react";



const Dialogs = (props) => {

    let dialogsElements = props.state.arrayNames.map(d => <DialogItem name={d.name} id={d.url} img={d.img}/>)
    let dialogMessages = props.state.arrayMessages.map(m => <DialogMessage message={m.message} />)


    let typingText = React.createRef()

    let sendMessage = () => {
        props.sendMessage()
    }
    let updateMessage = () => {
        let text = typingText.current.value
        props.updateMessage(text)
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
                          onChange={updateMessage}
                          value={props.state.newMessageText}/>
                <div>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs









