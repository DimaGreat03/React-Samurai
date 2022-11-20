import {sendMessageActionCreator, updateMessageActionCreator} from "../Redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthNavigate} from "../hoc/withAuthNavigate";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        state: state.messagePage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        updateMessage: (text) => {
            dispatch(updateMessageActionCreator(text))
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthNavigate
)(Dialogs)






