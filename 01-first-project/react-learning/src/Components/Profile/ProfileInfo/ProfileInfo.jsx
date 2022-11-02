import s from "./ProfileInfo.module.css"
import Preloader from "../../common/preloader/preloader";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className={s.logo}
                    src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"/>
            </div>
            <div className={s.ava}>
                <img
                    src="https://cdn.myanimelist.net/s/common/uploaded_files/1442184843-515d9f296a98530000e345d4c3bad3b1.jpeg"/>
                <img src={props.profile.photos.large}/>
                AVA + RESCRIPTION
            </div>
        </div>
    )
}

export default ProfileInfo