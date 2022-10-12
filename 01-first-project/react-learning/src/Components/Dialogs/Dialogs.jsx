import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";
import {arrayNames, arrayMessages} from "./../../index"


const Dialogs = (props) => {

    let dialogsElements = arrayNames.map(d => <DialogItem name={d.name} id={d.url}/>)
    let dialogMessages = arrayMessages.map(m => <DialogMessage message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.peoples}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {dialogMessages}
            </div>
        </div>
    )
}

export default Dialogs









