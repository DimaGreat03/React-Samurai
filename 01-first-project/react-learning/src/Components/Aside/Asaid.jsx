import s from "./Asaid.module.css"

const Asaid = () => {
    return (
        <div className={s.aside}>
            <div className={`${s.item} ${s.active}`}> <a href="/profile"> Profile</a> </div>
            <div className={s.item}><a href="/dialogs">Messages</a></div>
            <div className={s.item}><a href>News</a></div>
            <div className={s.item}><a href>Music</a></div>
            <p>
                <div className={s.item}><a href>Setting</a></div>
            </p>
        </div>
    )
}

export default Asaid


