import s from "./Asaid.module.css"
import {NavLink} from "react-router-dom";

const Asaid = () => {
    return (
        <div className={s.aside}>
            <div className={s.item}><NavLink to="/profile"
                                             className={navData => navData.isActive ? s.activeLink : s.item}> Profile</NavLink>
            </div>
            <div className={s.item}><NavLink to="/message"
                                             className={navData => navData.isActive ? s.activeLink : s.item}>Message</NavLink>
            </div>
            <div className={s.item}><NavLink to="/news"
                                             className={navData => navData.isActive ? s.activeLink : s.item}>News</NavLink>
            </div>
            <div className={s.item}><NavLink to="music"
                                             className={navData => navData.isActive ? s.activeLink : s.item}>Music</NavLink>
            </div>
            <p>
                <div className={s.item}><NavLink to="setting"
                                                 className={navData => navData.isActive ? s.activeLink : s.item}>Setting</NavLink>
                </div>
            </p>
        </div>
    )
}

export default Asaid


