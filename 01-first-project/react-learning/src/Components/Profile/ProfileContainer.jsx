import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../Redux/profile-reducer";
import {useParams} from "react-router-dom";

class ProfileApi extends React.Component {

    componentDidMount() {
        let userId = this.props.param.userId
        if (userId == null) {userId = 1432};
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            debugger
            this.props.setUserProfile(response.data)
        })
    }

    render () {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


const WithRouter = (props) => {
    return <ProfileApi {...props} param={useParams()}/>
}



const ProfileContainer = connect (mapStateToProps, {setUserProfile}) (WithRouter)

export default ProfileContainer;




