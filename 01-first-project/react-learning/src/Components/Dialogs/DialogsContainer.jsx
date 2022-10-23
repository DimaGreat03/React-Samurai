import {sendMessageActionCreator, updateMessageActionCreator} from "../Redux/message-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../store-context";

const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {
            (store) => {
                let sendMessage = () => {
                    store.dispatch(sendMessageActionCreator())
                };
                let updateMessage = (typingText) => {
                    store.dispatch(updateMessageActionCreator(typingText))
                };
                let state = store.getState().messagePage;

                return <Dialogs sendMessage={sendMessage}
                                updateMessage={updateMessage}
                                state={state}/>
            }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;









