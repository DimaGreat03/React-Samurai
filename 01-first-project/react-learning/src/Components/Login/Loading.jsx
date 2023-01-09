import {Component} from "react";
import {connect} from "react-redux";
import {authMeThunk} from "../Redux/auth-reducer";
import {compose} from "redux";
import {NavigateFromLoading} from "../hoc/NavigateFromLoading";
import Preloader from "../common/preloader/preloader";


class Loading extends Component {

    componentDidMount() {
        this.props.authMeThunk()
    }

    render() {
        return <div>
            <Preloader/>
        </div>
    }
}


export default compose(
    connect(null, {authMeThunk}),
    NavigateFromLoading
)(Loading)