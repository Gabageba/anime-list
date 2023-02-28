import { getAnime } from '../api/animeApi'
import { ANIME_LIMIT } from '../utils/const'

const SET_ANIME_DATA = 'SET_ANIME_DATA'
const CLEAR_ANIME_DATA = 'CLEAR_ANIME_DATA'
const SET_ANIME_LOAD = 'SET_ANIME_LOAD'
const SET_LOAD_MORE_ANIME = 'SET_LOAD_MORE_ANIME'
const SET_ANIME_PAGE = 'SET_ANIME_PAGE'

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
    case SET_ANIME_PAGE:
      return {
        ...state,
        page: action.currentPage,
      }
    default:
      return state
  }
}

export const getAnimeData = (userId, status, page, loadMoreAnime) => {
  return (dispatch) => {
    if (loadMoreAnime) {
      dispatch(setAnimeLoad(true))
      getAnime(userId, page, status, ANIME_LIMIT)
        .then((animeData) => {
          console.log(animeData, 'Anime data')
          if (animeData.length === ANIME_LIMIT + 1) {
            animeData.pop()
            dispatch(setLoadMoreAnime(true))
          } else {
            dispatch(setLoadMoreAnime(false))
          }
          dispatch(setAnimeData(animeData))
        })
        .catch((error) => {
          console.error(error)
        })
        .finally(() => dispatch(setAnimeLoad(false)))
    }
  }
}
export const clearAnimeData = () => ({ type: CLEAR_ANIME_DATA })
export const setAnimePage = (currentPage) => ({ type: SET_ANIME_PAGE, currentPage })
const setAnimeData = (anime) => ({ type: SET_ANIME_DATA, anime })
const setAnimeLoad = (isLoad) => ({ type: SET_ANIME_LOAD, isLoad })
export const setLoadMoreAnime = (loadMore) => ({ type: SET_LOAD_MORE_ANIME, loadMore })
