import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/post";
import HookForm from "../../common/HookForm/HookForm";


const MyPosts = React.memo(props => {

    let postElements = props.state.posts.map(m => <Post message={m.message} likes={m.scoreLikes}/>)
    return (
        <div>
            <div>
                MY POSTS
                <div>
                    <HookForm addNewText={props.addNewPost}/>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
});

export default MyPosts


