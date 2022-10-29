import s from "./Asaid.module.css"
import {NavLink} from "react-router-dom";

const Asaid = () => {
    return (
        <div className={s.aside}>
            <div><NavLink to="/profile"
                          className={navData => navData.isActive ? s.activeLink : s.notActiveLink}> Profile</NavLink>
            </div>
            <div><NavLink to="/message"
                          className={navData => navData.isActive ? s.activeLink : s.notActiveLink}>Message</NavLink>
            </div>
            <div><NavLink to="/news"
                          className={navData => navData.isActive ? s.activeLink : s.notActiveLink}>News</NavLink>
            </div>
            <div><NavLink to="music"
                          className={navData => navData.isActive ? s.activeLink : s.notActiveLink}>Music</NavLink>
            </div>
            <div><NavLink to="/users"
                          className={navData => navData.isActive? s.activeLink : s.notActiveLink}>Users</NavLink>
            </div>
            <p>
                <div><NavLink to="setting"
                              className={navData => navData.isActive ? s.activeLink : s.notActiveLink}>Setting</NavLink>
                </div>
            </p>
        </div>
    )
}

export default Asaid


