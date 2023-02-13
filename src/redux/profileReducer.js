import { getProfile } from '../api/profileApi'

const SET_PROFILE_DATA = 'SET_PTOFILE_DATA'
const SET_PROFILE_LOAD = 'SET_PROFILE_LOAD'

const initialState = {
  profileData: {},
  isProfileLoad: true,
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_DATA:
      return {
        ...state,
        profileData: action.profileData,
      }
    case SET_PROFILE_LOAD:
      return {
        ...state,
        isProfileLoad: action.isLoad,
      }
    default:
      return state
  }
}

export const getProfileData = (userId) => {
  return (dispatch) => {
    dispatch(setProfileLoad(true))
    getProfile(userId)
      .then((profile) => {
        dispatch(setProfileData(profile))
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => dispatch(setProfileLoad(false)))
  }
}

const setProfileData = (profileData) => ({ type: SET_PROFILE_DATA, profileData })
const setProfileLoad = (isLoad) => ({ type: SET_PROFILE_LOAD, isLoad })
