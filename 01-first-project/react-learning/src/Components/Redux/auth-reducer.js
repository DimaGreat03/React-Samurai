import {headerAPI} from "../Api/headerAPI";
import {setInitialSuccess} from "./app-reducer";

const SET_USER_DATA = 'samurai-network/auth/SET-USER-DATA'
const AUTH_ON = 'samurai-network/auth/AUTH-ON'
const NOT_AUTH = 'samurai-network/auth/NOT-AUTH'


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: null,
    checkAuth: null,
    error: '',
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case AUTH_ON:
            return {
                ...state,
                isAuth: true,
                checkAuth: false,
            }
        case NOT_AUTH:
            return {
                ...state,
                checkAuth: action.boolean,
                error: action.errorMessage,
            }
        default:
            return state
    }
}


export const setUserData = (id, email, login, isAuth,) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth,}})
export const authOn = () => ({type: AUTH_ON})
export const notAuth = (boolean, errorMessage) => ({type: NOT_AUTH, boolean, errorMessage})


export const authMeThunk = () => async (dispatch) => {
    let response = await headerAPI.authMe()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setUserData(id, email, login, true,))
    }
}


export const loginThunk = (email, password, rememberMe) => async (dispatch) => {
    let response = await headerAPI.login(email, password, rememberMe = true)
    if (response.data.resultCode === 0) {
        dispatch(authOn())
        dispatch(setInitialSuccess(false))
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(notAuth(true, message))
    }
}

export const logOutThunk = () => async (dispatch) => {
    let response = await headerAPI.logOut()
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}


export default authReducer