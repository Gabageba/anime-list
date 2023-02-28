import { applyMiddleware, combineReducers, createStore } from 'redux'
import { userReducer } from './userReducer'
import thunkMiddleware from 'redux-thunk'
import { profileReducer } from './profileReducer'
import { animeReducer } from './animeReducer'

const reducers = combineReducers({
  user: userReducer,
  profile: profileReducer,
  anime: animeReducer,
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))
