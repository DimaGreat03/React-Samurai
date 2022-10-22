import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../Redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };
    let onPostChange = (text) => {
        let action = updatePostActionCreator(text)
        props.store.dispatch(action)
    };
    let state = props.store.getState().profilePage;

    return (<MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     state={state}/>)
}

export default MyPostsContainer


