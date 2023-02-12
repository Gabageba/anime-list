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
      console.log(action.auth)
      return {
        ...state,
        isAuth: action.auth,
      }
    default:
      return state
  }
}

export const setIsAuth = (auth) => ({ type: SET_IS_AUTH, auth })
