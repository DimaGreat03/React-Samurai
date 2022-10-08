import s from "./MyPosts.module.css"
import Post from "./Post/post";

const MyPosts = () => {
    return (
        <div>
            <div>
                MY POSTS
                <div>
                    <textarea></textarea>
                    <button>add post</button>
                    <button>remove</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hello. I am first samurai Battu!' likes='Like 15'/>
                <Post message='Hi. I am friend first samurai Battu!' likes='Like 30'/>
            </div>
        </div>
    )
}

export default MyPosts


