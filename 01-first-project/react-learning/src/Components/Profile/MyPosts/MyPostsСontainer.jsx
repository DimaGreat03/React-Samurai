import {addNewPost, updatePost} from "../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        state: state.profilePage
    }
}


const MyPostContainer = connect(mapStateToProps, {addNewPost})(MyPosts);

export default MyPostContainer;