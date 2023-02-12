import { getAccessToken, getUserData, refreshAccessToken } from '../api/authApi'
import { ACCESS_TOKEN, ACCESS_TOKEN_CREATED_AT, REFRESH_TOKEN } from '../utils/const'
import { changeStorage } from '../utils/storage'

const SET_USER = 'setUser'
const SET_IS_AUTH = 'setIsAuth'

const initialState = {
  user: {},
  isAuth: false,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.userData,
      }
    case SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.auth,
      }
    default:
      return state
  }
}

export const getToken = (token, setAuthData) => {
  return (dispatch) => {
    const currentDate = Date.now()
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
      })
  }
}

export const refreshToken = (token, setAuthData) => {
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
    })
}

export const getUser = () => {
  return (dispatch) => {
    getUserData()
      .then((data) => {
        dispatch(setUser(data))
        dispatch(setIsAuth(true))
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

const setIsAuth = (auth) => ({ type: SET_IS_AUTH, auth })
const setUser = (userData) => ({ type: SET_USER, userData })
