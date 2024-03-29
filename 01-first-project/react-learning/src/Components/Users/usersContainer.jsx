import {connect} from "react-redux";
import {
    clickPageThunk,
    unfollowThunk, getUsersThunk,
    followThunk,
} from "../Redux/users-reducer";
import React from "react";
import Users from "./users";
import Preloader from "../common/preloader/preloader";
import {withAuthNavigate} from "../hoc/withAuthNavigate";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingIsProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../Redux/users-selectors";


class UsersApiContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsersThunk(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.clickPageThunk(pageNumber, pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users onPageChanged={this.onPageChanged} {...this.props}/>
        </>
    }
}

let mapStateToProps = (state) => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingIsProgress: getFollowingIsProgress(state),
})


export default compose(
    connect(mapStateToProps, {
        getUsersThunk, clickPageThunk, unfollowThunk, followThunk
    }),
    withAuthNavigate
)(UsersApiContainer)

