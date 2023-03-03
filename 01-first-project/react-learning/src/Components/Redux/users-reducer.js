import {UserAPI} from "../Api/userAPI";
import {updateObjectInArray} from "../utilits/validarors/object-helpers";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 1,
    isFetching: true,
    followingIsProgress: [],
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS: {
            return {
                ...state,
                users: action.users,
                isFetching: false,
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            }
        }
        case SET_USERS_TOTAL_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingIsProgress: action.isFetching
                    ? [...state.followingIsProgress, action.userId]
                    : state.followingIsProgress.filter(id => id !== action.userId)
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state
    }
}


export const followSuccess = (userId) => ({type: 'FOLLOW', userId})
export const unfollowSuccess = (userId) => ({type: 'UNFOLLOW', userId})
export const setUsers = (users) => ({type: 'SET-USERS', users})
export const setCurrentPage = (currentPage) => ({type: 'SET-CURRENT-PAGE', currentPage})
export const setUsersTotalCount = (totalCount) => ({type: 'SET-USERS-TOTAL-COUNT', totalCount})
export const toggleIsFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})


export const getUsersThunk = (currentPage, pageSize) => {
    return async (dispatch) => {
        let data = await UserAPI.getUser(currentPage, pageSize)
        dispatch(setUsers(data.items))
        dispatch(setUsersTotalCount(data.totalCount))
    }
}

export const clickPageThunk = (pageNumber, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let data = await UserAPI.getUserClick(pageNumber, pageSize)
        dispatch(setCurrentPage(pageNumber))
        dispatch(setUsers(data.items))
        dispatch(toggleIsFetching(false))
    }
}

const followUnfollowFlow = (userId, apiMethod, actionCreator) => {
    return async (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        let response = await apiMethod(userId)
        if (response.data.resultCode === 0) dispatch(actionCreator(userId))
        dispatch(toggleIsFollowingProgress(false, userId))
    }
}

export const unfollowThunk = (userId) => {
    return followUnfollowFlow(userId, UserAPI.unfollow.bind(UserAPI), unfollowSuccess)
}

export const followThunk = (userId) => {
    return followUnfollowFlow(userId, UserAPI.follow.bind(UserAPI), followSuccess)
}






export default userReducer











/*
export const unfollowThunk = (userId) => {
    return async (dispatch) => {
        let apiMethod = UserAPI.unfollow.bind(UserAPI)
        let actionCreator = unfollowSuccess;
        dispatch(toggleIsFollowingProgress(true, userId))
        let response = await apiMethod(userId)
        if (response.data.resultCode === 0) dispatch(actionCreator(userId))
        dispatch(toggleIsFollowingProgress(false, userId))
    }
}
*/


/*export const followThunk = (userId) => {
    return async (dispatch) => {
        let apiMethod = UserAPI.follow.bind(UserAPI)
        let actionCreator = followSuccess;
        dispatch(toggleIsFollowingProgress(true, userId))
        let response = await apiMethod(userId)
        if (response.data.resultCode === 0) dispatch(actionCreator(userId))
        dispatch(toggleIsFollowingProgress(false, userId))
    }
}*/