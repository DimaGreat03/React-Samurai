import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../store-context";


const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {
            (store) => {
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };
                let onPostChange = (text) => {
                    store.dispatch(updatePostActionCreator(text))
                };
                let state = store.getState().profilePage;

                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                state={state}/>
            }
        }
    </StoreContext.Consumer>
}

export default MyPostsContainer


