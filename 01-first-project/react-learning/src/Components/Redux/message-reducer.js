const SEND_MESSAGE = 'SEND-MESSAGE'

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
}



const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                arrayMessages: [...state.arrayMessages, {id: 5, message: action.newText}],
            }
        default:
            return state
    }
}


export const sendMessage = (newText) => ({type: 'SEND-MESSAGE', newText})

export default messageReducer