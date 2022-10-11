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

    return (
        <div className={s.dialogs}>
            <div className={s.peoples}>
                <DialogItem name={arrayNames[0].name} id={arrayNames[0].url}/>
                <DialogItem name={arrayNames[1].name} id={arrayNames[1].url}/>
                <DialogItem name={arrayNames[2].name} id={arrayNames[2].url}/>
                <DialogItem name={arrayNames[3].name} id={arrayNames[3].url}/>
            </div>

            <div className={s.messages}>
                <Message message={arrayMessages[0].message}/>
                <Message message={arrayMessages[1].message}/>
                <Message message={arrayMessages[2].message}/>
                <Message message={arrayMessages[3].message}/>
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




