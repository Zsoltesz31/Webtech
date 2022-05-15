import { applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer.js'
import { configureStore } from '@reduxjs/toolkit'

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunkMiddleware)
)

const store = configureStore({ reducer: rootReducer }, composedEnhancer)
export default store
