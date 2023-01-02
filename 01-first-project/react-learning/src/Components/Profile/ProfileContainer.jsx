import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusThunk, getUserProfileThunk, updateStatusThunk} from "../Redux/profile-reducer";
import {withAuthNavigate} from "../hoc/withAuthNavigate";
import {WithRouter} from "../hoc/WithRouter";
import {compose} from "redux";

class ProfileApi extends React.Component {
    componentDidMount() {
        let userId = this.props.param.userId
        if (userId == null) userId = this.props.id;
        this.props.getUserProfileThunk(userId)
        this.props.getStatusThunk(userId)
    }
    render () {
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    id: state.auth.id,
})

export default compose(
    connect (mapStateToProps, {getUserProfileThunk, getStatusThunk, updateStatusThunk}),
    WithRouter,
    withAuthNavigate,
)(ProfileApi)







