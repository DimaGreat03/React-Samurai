import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/post";


const MyPosts = (props) => {

    let postElements = props.posts.map(m => <Post message={m.message} likes={m.scoreLikes}/>)

    let textarea = React.createRef()

    let addPost = () => {
        let text = textarea.current.value
        props.addPost(text);
    };

    return (
        <div>
            <div>
                MY POSTS
                <div>
                    <textarea ref={textarea}></textarea>
                    <div>
                        <button onClick={addPost}>add post</button>
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


