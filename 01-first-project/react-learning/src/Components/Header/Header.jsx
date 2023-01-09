import s from "./Header.module.css"
import psar from "../assets/image/psar.png"
import ars from "../assets/image/ars.png"
import ars2 from "../assets/image/ars2.png"
import sad from "../assets/image/sad.png"
import ars3 from "../assets/image/ars3.png"
import psar2 from "../assets/image/psar2.png"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <div className={s.front}>
                <img src={psar}/>
                <img src={ars}/>
                <img src={ars2}/>
                <img src={sad}/>
                <img src={ars3}/>
                <img src={psar2}/>
            </div>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'}>
                        <div className={s.login}>Log in</div>
                    </NavLink>}
            </div>
            <div> {props.isAuth ? <button onClick={props.logOutThunk}
                                          className={s.button}>Exit</button> : null} </div>
        </header>
    )
}

export default Header


