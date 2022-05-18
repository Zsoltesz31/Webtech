import { combineReducers } from 'redux'

import postReducer from './store/posts.js'
import userReducer from './store/userSlice.js'

const rootReducer = combineReducers({
    posts: postReducer,
    user: userReducer
})

export default rootReducer
