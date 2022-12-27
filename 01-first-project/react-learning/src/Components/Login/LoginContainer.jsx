import {connect} from "react-redux";
import Login from "./Login";
import {authMeThunk, loginThunk} from "../Redux/auth-reducer";
import {compose} from "redux";
import {NavigateProfile} from "../hoc/withNavigateProfile";


export default compose(
    connect(null, {loginThunk, authMeThunk}),
    NavigateProfile
)(Login)