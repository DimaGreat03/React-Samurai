import s from "./Header.module.css"
import psar from "../assets/image/psar.png"
import ars from "../assets/image/ars.png"
import ars2 from "../assets/image/ars2.png"
import sad from "../assets/image/sad.png"
import ars3 from "../assets/image/ars3.png"
import psar2 from "../assets/image/psar2.png"

const Header = () => {
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
            <h1 className={s.text}>Your brothers is not HOLLY</h1>
        </header>
    )
}

export default Header


