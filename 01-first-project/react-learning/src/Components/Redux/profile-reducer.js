import {profileAPI} from "../Api/profileAPI";

const ADD_POST = 'ADD-POST'
const UPDATE_POST = 'UPDATE-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'


let initialState = {
    posts: [
        {id: 1, message: 'Hi, i-am ruroni Kenshin', scoreLikes: 'Likes 35'},
        {id: 2, message: 'My favorite samurai anime', scoreLikes: 'Likes 77'},
    ],
    newPostText: 'Dima-kek',
    profile: null,
    status: "",
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let body = state.newPostText;
            return {
                ...state,
                newPostText: '',
                posts: [{id: 3, message: body, scoreLikes: 'Likes +1'}, ...state.posts,]
            }
        case UPDATE_POST:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const updatePostActionCreator = (newText) => ({type: UPDATE_POST, newText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})
export default profileReducer


export const getUserProfileThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}
export const getStatusThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setUserStatus(response.data))
        })
    }
}

export const updateStatusThunk = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
    }
}


