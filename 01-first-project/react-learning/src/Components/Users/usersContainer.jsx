import {connect} from "react-redux";
import {
    clickPageThunk,
    followSuccess, unfollowThunk, getUsersThunk,
    unfollowSuccess, followThunk,
} from "../Redux/users-reducer";
import React from "react";
import Users from "./users";
import Preloader from "../common/preloader/preloader";
import {withAuthNavigate} from "../hoc/withAuthNavigate";


class UsersApiContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.clickPageThunk(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users onPageChanged={this.onPageChanged} {...this.props}/>
        </>
    }
}

let AuthNavigateComponent = withAuthNavigate(UsersApiContainer)

let mapStateToProps = (state) => ({
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingIsProgress: state.usersPage.followingIsProgress,
})

const UsersContainer = connect(mapStateToProps, {
    unfollowSuccess,
    followSuccess,
    getUsersThunk,
    clickPageThunk,
    unfollowThunk,
    followThunk,
})(AuthNavigateComponent);

export default UsersContainer;