import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/post";
import {addPostActionCreator, updatePostActionCreator} from "../../Redux/profile-reducer";


const MyPosts = (props) => {

    let postElements = props.posts.map(m => <Post message={m.message} likes={m.scoreLikes}/>)

    let typingText = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = typingText.current.value;
        props.dispatch(updatePostActionCreator(text))
    }


    return (
        <div>
            <div>
                MY POSTS
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={typingText}
                        value={props.newPostText}/>
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


