import { getAccessToken, getUserData, refreshAccessToken } from '../api/authApi'
import { ACCESS_TOKEN, ACCESS_TOKEN_CREATED_AT, REFRESH_TOKEN } from '../utils/const'
import { changeStorage } from '../utils/storage'

const SET_USER = 'SET_USER'
const SET_IS_AUTH = 'SET_IS_AUTH'
const SET_AUTH_LOAD = 'SET_AUTH_LOAD'

const initialState = {
  userData: {},
  isAuth: false,
  isAuthLoad: true,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        userData: action.userData,
      }
    case SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.auth,
      }
    case SET_AUTH_LOAD:
      return {
        ...state,
        isAuthLoad: action.isLoad,
      }
    default:
      return state
  }
}

export const getToken = (token, setAuthData) => {
  return (dispatch) => {
    const currentDate = Date.now()
    dispatch(setAuthLoad(true))
    getAccessToken(token)
      .then((data) => {
        changeStorage(setAuthData, {
          [ACCESS_TOKEN]: data.access_token,
          [REFRESH_TOKEN]: data.refresh_token,
          [ACCESS_TOKEN_CREATED_AT]: currentDate,
        })
        dispatch(setIsAuth(true))
      })
      .catch((error) => {
        console.error(error)
        dispatch(setIsAuth(false))
      })
      .finally(() => {
        dispatch(setAuthLoad(false))
      })
  }
}

export const refreshToken = (token, setAuthData) => {
  return (dispatch) => {
    dispatch(setAuthLoad(true))
    const currentDate = Date.now()
    refreshAccessToken(token)
      .then((data) => {
        changeStorage(setAuthData, {
          [ACCESS_TOKEN]: data.access_token,
          [REFRESH_TOKEN]: data.refresh_token,
          [ACCESS_TOKEN_CREATED_AT]: currentDate,
        })
      })
      .catch((error) => {
        console.error(error)
        dispatch(setIsAuth(false))
      })
  }
}

export const getUser = () => {
  return (dispatch) => {
    dispatch(setAuthLoad(true))
    getUserData()
      .then((data) => {
        dispatch(setUser(data))
        dispatch(setIsAuth(true))
      })
      .catch((error) => {
        console.error(error)
        dispatch(setIsAuth(false))
      })
      .finally(() => {
        dispatch(setAuthLoad(false))
      })
  }
}

const setIsAuth = (auth) => ({ type: SET_IS_AUTH, auth })
const setAuthLoad = (isLoad) => ({ type: SET_AUTH_LOAD, isLoad })
const setUser = (userData) => ({ type: SET_USER, userData })
