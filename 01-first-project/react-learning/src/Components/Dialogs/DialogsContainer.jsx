import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthNavigate} from "../hoc/withAuthNavigate";
import {compose} from "redux";
import {sendMessage} from "../Redux/message-reducer";


let mapStateToProps = (state) => {
    return {
        state: state.messagePage,
    }
}


export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthNavigate
)(Dialogs)






