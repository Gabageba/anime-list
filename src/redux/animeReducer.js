import {getAnime, putAnimeRate} from '../api/animeApi'
import {ANIME_LIMIT} from '../utils/const'

const SET_ANIME_DATA = 'SET_ANIME_DATA'
const CLEAR_ANIME_DATA = 'CLEAR_ANIME_DATA'
const SET_ANIME_LOAD = 'SET_ANIME_LOAD'
const SET_LOAD_MORE_ANIME = 'SET_LOAD_MORE_ANIME'
const CLEAR_ANIME_PAGE = 'CLEAR_ANIME_PAGE'
const NEXT_ANIME_PAGE = 'NEXT_ANIME_PAGE'

const initialState = {
  animeData: [],
  isAnimeLoad: true,
  loadMoreAnime: true,
  animePage: 1,
}

export const animeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ANIME_DATA:
      return {
        ...state,
        animeData: [...state.animeData, ...action.anime],
      }
    case SET_ANIME_LOAD:
      return {
        ...state,
        isAnimeLoad: action.isLoad,
      }
    case SET_LOAD_MORE_ANIME:
      return {
        ...state,
        loadMoreAnime: action.loadMore,
      }
    case CLEAR_ANIME_DATA:
      return {
        ...state,
        animeData: [],
      }
    case CLEAR_ANIME_PAGE:
      return {
        ...state,
        animePage: 1,
      }
    case NEXT_ANIME_PAGE:
      return {
        ...state,
        animePage: state.animePage + 1
      }
    default:
      return state
  }
}

export const clearAnime = (userId, status,) => {
  return (dispatch) => {
    dispatch(clearAnimePage())
    dispatch(clearAnimeData())
    dispatch(setLoadMoreAnime(true))
    dispatch(getAnimeData(userId, status, 1, true))
  }
}

export const getAnimeData = (userId, status, page, loadMoreAnime) => {
  return (dispatch) => {
    if (loadMoreAnime) {
      dispatch(setAnimeLoad(true))
      getAnime(userId, page, status, ANIME_LIMIT)
        .then((animeData) => {
          if (animeData.length === ANIME_LIMIT + 1) {
            animeData.pop()
            dispatch(setLoadMoreAnime(true))
          } else {
            dispatch(setLoadMoreAnime(false))
          }
          dispatch(setAnimeData(animeData))
          dispatch(nextAnimePage())
        })
        .catch((error) => {
          console.error(error)
        })
        .finally(() => dispatch(setAnimeLoad(false)))
    }
  }
}

export const putAnimeData = (userId, status, currentStatus, action) => {
  return dispatch => {
    putAnimeRate(userId, currentStatus)
      .then(() => {
        dispatch(clearAnimePage())
        dispatch(clearAnimeData())
        action()
        getAnimeData(userId, status, 1, true)
      })
      .catch(e => console.error(e))
  }
}


const clearAnimeData = () => ({type: CLEAR_ANIME_DATA})
const clearAnimePage = () => ({type: CLEAR_ANIME_PAGE})
const setLoadMoreAnime = (loadMore) => ({type: SET_LOAD_MORE_ANIME, loadMore})
const setAnimeData = (anime) => ({type: SET_ANIME_DATA, anime})
export const setAnimeLoad = (isLoad) => ({type: SET_ANIME_LOAD, isLoad})
const nextAnimePage = () => ({type: NEXT_ANIME_PAGE})
