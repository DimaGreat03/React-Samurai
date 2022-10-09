import s from "./Dialogs.module.css"

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.peoples}>
                <div className={s.people}>
                Dima
                </div>
                <div className={`${s.people} ${s.active}`}>
                Polina
                </div>
                <div className={s.people}>
                Eranga
                </div>
                <div className={s.people}>
                Budim
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