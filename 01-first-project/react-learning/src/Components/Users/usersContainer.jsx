import {connect} from "react-redux";
import Users from "./users";
import {folowAC, setUsersAC, unfolowAC} from "../Redux/users-reducer";



let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        unfollow: (userId) => {
            dispatch(unfolowAC(userId))
        },

        follows: (userID) => {
            dispatch(folowAC(userID))
        },

        setUsers: (user) => {
            dispatch(setUsersAC(user))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;