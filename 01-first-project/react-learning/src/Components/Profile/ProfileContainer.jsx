import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunk} from "../Redux/profile-reducer";
import {withAuthNavigate} from "../hoc/withAuthNavigate";
import {WithRouter} from "../hoc/WithRouter";
import {compose} from "redux";

class ProfileApi extends React.Component {
    componentDidMount() {
        let userId = this.props.param.userId
        if (userId == null) {userId = 1432};
        this.props.getUserProfileThunk(userId)
    }
    render () {
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default compose(
    connect (mapStateToProps, {getUserProfileThunk}),
    WithRouter,
    withAuthNavigate,
)(ProfileApi)







