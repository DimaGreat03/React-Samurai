import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";



const Dialogs = (props) => {

    let dialogsElements = props.arrayNames.map(d => <DialogItem name={d.name} id={d.url} img={d.img}/>)
    let dialogMessages = props.arrayMessages.map(m => <DialogMessage message={m.message}/>)

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









