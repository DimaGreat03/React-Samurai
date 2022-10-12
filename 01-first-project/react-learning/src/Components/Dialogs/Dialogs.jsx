import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {

    //Массив для имен и их url
    let arrayNames = [
        {url: 1, name: 'Dima'},
        {url: 2, name: 'Polya'},
        {url: 3, name: 'Eranga'},
        {url: 4, name: 'Budik'}
    ]

    //Массив для сообщений
    let arrayMessages = [
        {id: 1, message: 'Hi, i-a Dima'},
        {id: 2, message: 'I am Polya, and I am funny'},
        {id: 3, message: 'Just Eranga'},
        {id: 4, message: 'I-am Budik'}
    ]

    let dialogsElements = arrayNames.map(d => <DialogItem name={d.name} id={d.url}/>)
    let dialogMessages = arrayMessages.map(m => <Message message={m.message}/>)

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


//----------------------------------------------------------------------------------------------------------------------

const DialogItem = (props) => {
    return (
        <div>
            <div className={s.people}>
                <NavLink to={"dialog/" + props.id}
                         className={navData => navData.isActive ? s.activeLink : s.notActiveLink}> {props.name} </NavLink>
            </div>
        </div>
    )
}

const Message = (props) => {
    return (
        <div>
            {props.message}
        </div>
    )
}




