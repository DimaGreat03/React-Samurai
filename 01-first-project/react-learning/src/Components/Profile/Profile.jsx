import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css"
import MyPostsContainer from "./MyPosts/MyPostsСontainer";

const Profile = (props) => {

    return (
        <div className={s.all}>
            <ProfileInfo/>
            <MyPostsContainer posts={props.profilePage.posts}
                              newPostText={props.profilePage.newPostText}
                              dispatch={props.dispatch}

            />
        </div>
    )
}

export default Profile


