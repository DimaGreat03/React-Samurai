import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css"

const Profile = (props) => {

    return (
        <div className={s.all}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}
                     updatePost={props.updatePost}/>
        </div>
    )
}

export default Profile


