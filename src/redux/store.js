import { combineReducers, createStore } from 'redux'
import { userReducer } from './userReducer'

const reducers = combineReducers({
  user: userReducer,
})

export const store = createStore(reducers)
