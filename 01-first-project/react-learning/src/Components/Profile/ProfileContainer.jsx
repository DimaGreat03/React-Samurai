import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunk, setUserProfile} from "../Redux/profile-reducer";
import {withAuthNavigate} from "../hoc/withAuthNavigate";
import {useParams} from "react-router-dom";

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

let AuthNavigateComponent = withAuthNavigate(ProfileApi)


const WithRouter = (props) => {
    return <AuthNavigateComponent {...props} param={useParams()}/>
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

const ProfileContainer = connect (mapStateToProps, {setUserProfile, getUserProfileThunk,}) (WithRouter)

export default ProfileContainer;




