import {headerAPI} from "../Api/headerAPI";

const SET_USER_DATA = 'SET-USER-DATA'
const AUTH_ON = 'AUTH-ON'
const NOT_AUTH = 'NOT-AUTH'
const ERROR = 'ERROR'


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
                isAuth: true
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


export const setUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}})
export const authOn = () => ({type: AUTH_ON})
export const notAuth = (boolean, errorMessage) => ({type: NOT_AUTH, boolean, errorMessage})



export const authMeThunk = () => {
    return (dispatch) => {
        headerAPI.authMe().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setUserData(id, email, login,))
            }
        })
    }
}

export const loginThunk = (email, password, rememberMe) => {
    return (dispatch) => {
        headerAPI.login(email, password, rememberMe = true).then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(authOn()) (notAuth(false))
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                    dispatch(notAuth(true, message))
                }})}
}

export const logOutThunk = () => {
    return (dispatch) => {
        headerAPI.logOut().then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserData(null, null, null, false))
                }})}
}


export default authReducer