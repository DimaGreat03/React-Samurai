import {connect} from "react-redux";
import Login from "./Login";
import {loginThunk} from "../Redux/auth-reducer";
import {compose} from "redux";
import {NavigateProfile} from "../hoc/withNavigateProfile";


let mapStateToProps = (state) => ({
    checkAuth: state.auth.checkAuth,
    error: state.auth.error
})

export default compose(
    connect(mapStateToProps, {loginThunk}),
    NavigateProfile
)(Login)