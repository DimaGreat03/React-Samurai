import s from "./footer.module.css"
import ars from "../assets/image/ars.jpeg"
import we from "../assets/image/we.jpeg"
import brothers from "../assets/image/brothers.jpeg"



let Footer = () => {
    return (
        <div className={s.footer}>
            Это твой подвал социальной сети!
            <div>Твои братья не святые</div>
            <div>
                <img src={brothers}/>
                <img src={ars}/>
                <img src={we}/>
            </div>
        </div>
    )
}

export default Footer;