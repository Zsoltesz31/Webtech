import { combineReducers } from 'redux'

import postReducer from './store/posts.js'

const rootReducer = combineReducers({
    posts: postReducer,
})

export default rootReducer
