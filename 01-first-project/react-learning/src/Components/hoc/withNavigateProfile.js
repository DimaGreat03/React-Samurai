import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForNavigate = (state) => ({
    isAuth: state.auth.isAuth,
})


export const NavigateProfile = (Component) => {
    let withNavigateProfile = (props) => {
        if (props.isAuth) return <Navigate to={"/loading"}/>
        return (
            <Component {...props}/>
        )
    }
    let connectedWithNavigateProfile = connect(mapStateToPropsForNavigate)(withNavigateProfile)
    return connectedWithNavigateProfile
}