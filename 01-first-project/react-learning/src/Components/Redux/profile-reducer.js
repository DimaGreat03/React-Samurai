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
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                scoreLikes: 'Likes +7'
            }
            let stateCopy = {...state.posts}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.unshift(newPost)
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_POST: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy
        }
        default:
            return state

    }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const updatePostActionCreator = (text) => ({type: 'UPDATE-POST', newText: text})

export default profileReducer