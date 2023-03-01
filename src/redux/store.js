import { applyMiddleware, combineReducers, createStore } from 'redux'
import { userReducer } from './userReducer'
import thunkMiddleware from 'redux-thunk'
import { profileReducer } from './profileReducer'
import { animeReducer } from './animeReducer'
import {mangaReducer} from './mangaReducer'

const reducers = combineReducers({
  user: userReducer,
  profile: profileReducer,
  anime: animeReducer,
  manga: mangaReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))
