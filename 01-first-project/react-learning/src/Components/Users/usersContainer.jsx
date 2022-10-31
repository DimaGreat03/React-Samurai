import {connect} from "react-redux";
import {folowAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfolowAC} from "../Redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./users";



class UsersApiContainer extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    render() {
        return <Users onPageChanged={this.onPageChanged}
                      totalUserCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      follows={this.props.follows}/>
    }
}


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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiContainer);

export default UsersContainer;