import s from "./ProfileInfo.module.css"
import Preloader from "../../common/preloader/preloader";
import ars from "../../assets/image/ars.jpeg"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatusThunk, param, userId,}) => {

    if (!profile) return <Preloader/>


    return (
        <div className={s.info}>
            <div>
                <img className={s.logo} src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"/>
            </div>

            <div className={s.ava}>
                <img src={profile.photos.large == null
                        ? ars
                        : profile.photos.large}/>
                {profile.fullName} --- {profile.userId}

                <ProfileStatusWithHooks status={status}
                                        updateStatusThunk={updateStatusThunk}
                                        param={param}
                                        userId={userId}
                />
            </div>

            <div className={s.data}><b>Чем я владею:</b>
                <li>{profile.lookingForAJobDescription}</li>
            </div>
        </div>
    )
}

export default ProfileInfo