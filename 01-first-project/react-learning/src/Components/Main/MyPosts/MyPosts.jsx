import s from "./MyPosts.module.css"
import Post1 from "./Post/post 1";

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
                <Post1/>
                <Post1/>
                <Post1/>
                <Post1/>
            </div>
        </div>
    )
}

export default MyPosts


