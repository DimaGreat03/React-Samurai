import {addPostActionCreator, updatePostActionCreator} from "../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";






let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            dispatch(updatePostActionCreator(text))
        }
    }
}
let mapStateToProps = (state) => {
    return {
        state: state.profilePage
    }
}


const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostContainer;