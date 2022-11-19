import {sendMessageActionCreator, updateMessageActionCreator} from "../Redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthNavigate} from "../hoc/withAuthNavigate";


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

let AuthNavigateComponent = withAuthNavigate(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthNavigateComponent)

export default DialogsContainer;





