import { USER_STATE_CHANGE, USER_POST_STATE_CHANGE, GET_BOOKS } from "../constants"

const initialState = {
    currentUser: null,
    posts: [],
    books: []
}

export const user = (state = initialState, action) => {
    switch (action.type) {
        case USER_STATE_CHANGE:
            return {
                ...state,
                currentUser: action.currentUser
            }
        case USER_POST_STATE_CHANGE:
            return {
                ...state,
                posts: action.posts
            }
        case GET_BOOKS:
            return {
                ...state,
                books: action.books
            }
        default:
            return state;
    }

}
