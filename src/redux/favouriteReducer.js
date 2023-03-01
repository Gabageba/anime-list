import {getFavourite} from '../api/favouriteApi'

const SET_FAVOURITE_DATA = 'SET_FAVOURITE_DATA'
const SET_FAVOURITE_LOAD = 'SET_FAVOURITE_LOAD'

const initialState = {
  favouriteData: {},
  isFavouriteLoad: true,
}

export const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVOURITE_DATA:
      return {
        ...state,
        favouriteData: action.data,
      }
    case SET_FAVOURITE_LOAD:
      return {
        ...state,
        isFavouriteLoad: action.isLoad,
      }
    default:
      return state
  }
}

export const getFavouriteData = (userId) => {
  return (dispatch) => {
    dispatch(setFavouriteLoad(true))
    getFavourite(userId)
      .then((data) => {
        dispatch(setFavouriteData(data))
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => dispatch(setFavouriteLoad(false)))
  }
}

const setFavouriteData = (data) => ({ type: SET_FAVOURITE_DATA, data })
const setFavouriteLoad = (isLoad) => ({ type: SET_FAVOURITE_LOAD, isLoad })
