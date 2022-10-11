import s from "./MyPosts.module.css"
import Post from "./Post/post";


const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, i-am ruroni Kenshin', scoreLikes: 'Likes 35'},
        {id: 2, message: 'My favorite samurai anime', scoreLikes: 'Likes 77'}
    ]
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
                <Post message={postData[0].message} likes={postData[0].scoreLikes}/>
                <Post message={postData[1].message} likes={postData[1].scoreLikes}/>
            </div>
        </div>
    )
}

export default MyPosts


