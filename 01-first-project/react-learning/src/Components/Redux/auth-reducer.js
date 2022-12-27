import {headerAPI} from "../Api/headerAPI";

const SET_USER_DATA = 'SET-USER-DATA'
const AUTH_ON = 'AUTH-ON'
const EXIT_AUTH = 'EXIT-AUTH'


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
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
        default:
            return state
    }
}


export const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})
export const authOn = () => ({type: AUTH_ON})


export const authMeThunk = () => {
    return (dispatch) => {
        headerAPI.authMe().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setUserData(id, email, login))
            }
        })
    }
}

export const loginThunk = (email, password, rememberMe) => {
    return (dispatch) => {
        headerAPI.login(email, password, rememberMe = true).then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(authOn())
                }
            }
        )
    }
}

export const logOutThunk = () => {
    return (dispatch) => {
        headerAPI.logOut().then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserData(null, null, null, false ))
                }
            }
        )
    }
}


export default authReducer