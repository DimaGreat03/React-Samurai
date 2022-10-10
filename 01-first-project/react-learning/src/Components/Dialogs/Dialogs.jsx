import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "dialog/" + props.id
    return (
        <div>
            <div className={s.people}>
                <NavLink to={path}
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


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.peoples}>
                <DialogItem name="Dima" id="1"/>
                <DialogItem name="Polina" id="2"/>
                <DialogItem name="Eranga" id="3"/>
                <DialogItem name="Budik" id="4"/>
            </div>

            <div className={s.messages}>
                <Message message="I-am Dima"/>
                <Message message="I love 2013 year, because Dima"/>
                <Message message="I am just Erana"/>
                <Message message="just Budik"/>
            </div>
        </div>
    )
}

export default Dialogs