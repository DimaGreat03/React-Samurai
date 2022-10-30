import {connect} from "react-redux";
import Users from "./users";
import {folowAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfolowAC} from "../Redux/users-reducer";



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUserCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;