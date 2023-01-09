import {authMeThunk} from "./auth-reducer";

const INITIAL_SUCCESS = 'INITIAL-SUCCESS'


let initialState = {
    initial: false,
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIAL_SUCCESS:
            return {
                ...state,
                initial: true,
            }
        default:
            return state
    }
}


export const setInitialSuccess = () => ({type: INITIAL_SUCCESS})


export const initialAppThunk = () => (dispatch) => {
    let promise = dispatch(authMeThunk())
    Promise.all([promise]).then(() => {
        dispatch(setInitialSuccess())
    })
}


export default appReducer;