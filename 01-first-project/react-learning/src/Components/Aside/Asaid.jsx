import s from "./Asaid.module.css"

const Asaid = () => {
    return (
        <aside className={s.aside}>
            <div className={`${s.item} ${s.active}`}> <a href> Profile</a> </div>
            <div className={s.item}><a href>Messages</a></div>
            <div className={s.item}><a href>News</a></div>
            <div className={s.item}><a href>Music</a></div>
            <p>
                <div className={s.item}><a href>Setting</a></div>
            </p>
        </aside>
    )
}

export default Asaid


