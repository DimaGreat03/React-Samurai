import s from "./ProfileInfo.module.css"
import Preloader from "../../common/preloader/preloader";
import ars from "../../assets/image/ars.jpeg"


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.info}>
            <div>
                <img className={s.logo}
                    src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"/>
            </div>
            <div className={s.ava}>
                <img src={props.profile.photos.large == null? ars : props.profile.photos.large  }/> {props.profile.fullName}
            </div>
            <div className={s.data}> <b>Чем я владею:</b>  <li>{props.profile.lookingForAJobDescription}</li></div>
        </div>
    )
}

export default ProfileInfo