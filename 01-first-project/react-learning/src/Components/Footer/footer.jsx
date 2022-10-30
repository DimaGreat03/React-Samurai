import s from "./footer.module.css"


let Footer = () => {
    return (
        <div className={s.footer}>
            Это твой подвал социальной сети!
            <div>Твои братья не святые</div>
            <div>
                <img src="./image/brothers.jpeg"/>
                <img src="./image/ars.jpeg"/>
                <img src="./image/we.jpeg"/>
            </div>
        </div>
    )
}

export default Footer;