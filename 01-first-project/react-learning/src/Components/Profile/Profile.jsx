import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css"
import MyPostsContainer from "./MyPosts/MyPostsСontainer";

const Profile = (props) => {

    return (
        <div className={s.all}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile


