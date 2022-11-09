const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'


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
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u
                })
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
                isFetching: true,
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
        /*case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }*/
        default:
            return state
    }
}


export const follow = (userId) => ({type: 'FOLLOW', userId})
export const unfollow = (userId) => ({type: 'UNFOLLOW', userId})
export const setUsers = (users) => ({type: 'SET-USERS', users})
export const setCurrentPage = (currentPage) => ({type: 'SET-CURRENT-PAGE', currentPage})
export const setUsersTotalCount = (totalCount) => ({type: 'SET-USERS-TOTAL-COUNT', totalCount})
/*export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})*/
export const toggleIsFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})


export default userReducer