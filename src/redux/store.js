import { applyMiddleware, combineReducers, createStore } from 'redux'
import { userReducer } from './userReducer'
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
  user: userReducer,
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))
