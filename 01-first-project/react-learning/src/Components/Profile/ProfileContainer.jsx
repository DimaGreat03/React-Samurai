import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfileThunk, setUserProfile} from "../Redux/profile-reducer";
import {Navigate, useParams} from "react-router-dom";

class ProfileApi extends React.Component {

    componentDidMount() {
        let userId = this.props.param.userId
        if (userId == null) {userId = 1432};
        this.props.getUserProfileThunk(userId)
    }

    render () {
        if (!this.props.isAuth) return <Navigate to={"/login"} />
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
})


const WithRouter = (props) => {
    return <ProfileApi {...props} param={useParams()}/>
}



const ProfileContainer = connect (mapStateToProps, {setUserProfile, getUserProfileThunk,}) (WithRouter)

export default ProfileContainer;




