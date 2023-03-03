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
                initial: action.boolean,
            }
        default:
            return state
    }
}


export const setInitialSuccess = (boolean) => ({type: INITIAL_SUCCESS, boolean})


export const initialAppThunk = () => async (dispatch) => {
    await dispatch(authMeThunk())
    dispatch(setInitialSuccess(true))
}


export default appReducer;