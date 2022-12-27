import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authMeThunk, logOutThunk} from "../Redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authMeThunk()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}


export default connect(mapStateToProps, {authMeThunk, logOutThunk,})(HeaderContainer)


