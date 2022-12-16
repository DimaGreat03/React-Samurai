import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";
import React from "react";
import HookForm from "../common/HookForm/HookForm";


const Dialogs = (props) => {

    let dialogsElements = props.state.arrayNames.map(d => <DialogItem name={d.name} id={d.url} img={d.img}/>)
    let dialogMessages = props.state.arrayMessages.map(m => <DialogMessage message={m.message}/>)

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.peoples}>
                    {dialogsElements}
                </div>

                <div className={s.messages}>
                    {dialogMessages}
                    <div className={s.hookForm}>
                        <HookForm addNewText={props.sendMessage}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs









