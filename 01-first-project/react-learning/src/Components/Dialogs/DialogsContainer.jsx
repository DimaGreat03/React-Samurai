import {sendMessageActionCreator, updateMessageActionCreator} from "../Redux/message-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    };
    let updateMessage = (typingText) => {
        props.store.dispatch(updateMessageActionCreator(typingText))
    };
    let state = props.store.getState().messagePage;

    return (
        <div>
            <Dialogs sendMessage={sendMessage}
                     updateMessage={updateMessage}
                     state={state}/>
        </div>
    )
}

export default DialogsContainer;









