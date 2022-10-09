import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.peoples}>
                <div className={s.people}>
                    <NavLink to="/dhjkialog/1"> Dima </NavLink>
                </div>
                <div className={`${s.people} ${s.active}`}>
                    <NavLink to="/dialog/2"> Polina </NavLink>
                </div>
                <div className={s.people}>
                    <NavLink to="/dialog/3">Eranga </NavLink>
                </div>
                <div className={s.people}>
                    <NavLink to="/dialog/4">Budim </NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    hellow, i am go to 2013 year with Polya Demina
                </div>
                <div className={s.message}>
                    Hi Dima, i miss you and miss to 2014 year...
                </div>
                <div className={s.message}>
                    I am just angry girls.
                </div>
                <div className={s.message}>
                    I am big nose from Minusinsk :)
                </div>
            </div>
        </div>
    )
}

export default Dialogs