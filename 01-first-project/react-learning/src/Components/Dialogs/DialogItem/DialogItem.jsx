import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div>
            <div className={s.people}>
                <NavLink to={"dialog/" + props.id}
                         className={activeLink => activeLink.isActive ? s.activeLink : s.notActiveLink}>
                    {props.img}
                    {props.name} </NavLink>
            </div>
        </div>
    )
}

export default DialogItem