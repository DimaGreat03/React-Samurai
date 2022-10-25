const ADD_POST = 'ADD-POST'
const UPDATE_POST = 'UPDATE-POST'

let initialState = {
    posts: [
        {id: 1, message: 'Hi, i-am ruroni Kenshin', scoreLikes: 'Likes 35'},
        {id: 2, message: 'My favorite samurai anime', scoreLikes: 'Likes 77'},
    ],
    newPostText: 'Dima-kek'
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let body = state.newPostText;
            return {
                ...state,
                newPostText: '',
                posts: [{id: 3, message: body, scoreLikes: 'Likes +1'}, ...state.posts, ]
            }
        case UPDATE_POST:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const updatePostActionCreator = (text) => ({type: 'UPDATE-POST', newText: text})

export default profileReducer