const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'

let initialState = {
        arrayNames: [
            {url: 1, name: 'Dima', img: <img width="50px" src="/image/dima.png"/>},
            {url: 2, name: 'Polya', img: <img width="50px" src="/image/polina.png"/>},
            {url: 3, name: 'Eranga', img: <img width="50px" src="/image/erana.png"/>},
            {url: 4, name: 'Kalash', img: <img width="50px" src="/image/kalash.png"/>}
        ],
        arrayMessages: [
            {id: 1, message: <li> 'Hi, i-am Dima' </li>},
            {id: 2, message: <li>'I am Polya, and I am funny'</li>},
            {id: 3, message: <li>'Just Eranga'</li>},
            {id: 4, message: <li>'I-am Budik'</li>}
        ],
        newMessageText:  'click me'
}



const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 5,
                message: state.newMessageText
            }
            let stateCopy = {...state};
            stateCopy.arrayNames = [...state.arrayNames];
            stateCopy.arrayMessages = [...state.arrayMessages];
            stateCopy.arrayMessages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy
        }
        case UPDATE_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newText
            return stateCopy
        }
        default:
            return state
    }
}


export const sendMessageActionCreator = () => ({type: 'SEND-MESSAGE'})
export const updateMessageActionCreator = (text) => ({type: 'UPDATE-MESSAGE', newText: text})


export default messageReducer