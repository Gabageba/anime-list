import { applyMiddleware, combineReducers, createStore } from 'redux'
import { userReducer } from './userReducer'
import thunkMiddleware from 'redux-thunk'
import { profileReducer } from './ProfileReducer'

const reducers = combineReducers({
  user: userReducer,
  profile: profileReducer,
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))
