const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT'

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 21,
    currentPage: 2
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
                users: action.users
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_USERS_TOTAL_COUNT: {
                return {
                    ...state,
                    totalUsersCount: action.totalCount
                }
            }
        default:
            return state
    }
}


export const folowAC = (userId) => ({type: 'FOLLOW', userId})
export const unfolowAC = (userId) => ({type: 'UNFOLLOW', userId})
export const setUsersAC = (users) => ({type: 'SET-USERS', users})
export const setCurrentPageAC = (currentPage) => ({type: 'SET-CURRENT-PAGE', currentPage})
export const setUsersTotalCountAC = (totalCount) => ({type: 'SET-USERS-TOTAL-COUNT', totalCount})


export default userReducer