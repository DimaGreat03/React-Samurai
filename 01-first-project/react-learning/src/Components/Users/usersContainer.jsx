import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleIsFollowingProgress,
    unfollow,
} from "../Redux/users-reducer";
import React from "react";
import Users from "./users";
import Preloader from "../common/preloader/preloader";
import {UserApi} from "../Api/api";

class UsersApiContainer extends React.Component {

    componentDidMount() {
        UserApi.getUser(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.setUsersTotalCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        UserApi.getUserClick(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users onPageChanged={this.onPageChanged} {...this.props}/>
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingIsProgress: state.usersPage.followingIsProgress,
    }
}
const UsersContainer = connect(mapStateToProps, {
    unfollow,
    follow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFollowingProgress,
})(UsersApiContainer);

export default UsersContainer;