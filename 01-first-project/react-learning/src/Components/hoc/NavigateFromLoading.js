import {Navigate, Route,} from "react-router-dom";
import {connect} from "react-redux";


export const NavigateFromLoading = (Component) => {

    let mapStateToProps = (state) => ({
        loading: state.auth.loading
    })

    let WithRouterComponent = (props) => {
        if (props.loading) return <Navigate to={'/profile'}/>
        return <Component {...props} />
    }
    let loading = connect (mapStateToProps, null)(WithRouterComponent)
    return loading;
}




