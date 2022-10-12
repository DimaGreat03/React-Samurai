import s from "./MyPosts.module.css"
import Post from "./Post/post";


const MyPosts = (props) => {

    let postElements = props.posts.map( m => <Post message={m.message} likes={m.scoreLikes}/>)

    return (
        <div>
            <div>
                MY POSTS
                <div>
                    <textarea></textarea>
                    <div>
                        <button>add post</button>
                        <button>remove</button>
                    </div>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts


