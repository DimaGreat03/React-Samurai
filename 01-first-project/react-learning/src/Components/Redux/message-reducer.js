const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'


const messageReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText
            }
            state.arrayMessages.push(newMessage);
            state.newMessageText = '';
            return state
        case UPDATE_MESSAGE:
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}


export const sendMessageActionCreator = () => ({type: 'SEND-MESSAGE'})
export const updateMessageActionCreator = (text) => ({type: 'UPDATE-MESSAGE', newText: text})


export default messageReducer