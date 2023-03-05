import {MANGA_LIMIT} from '../utils/const'
import {getManga} from '../api/mangaApi'

const SET_MANGA_DATA = 'SET_MANGA_DATA'
const CLEAR_MANGA_DATA = 'CLEAR_MANGA_DATA'
const SET_MANGA_LOAD = 'SET_MANGA_LOAD'
const SET_LOAD_MORE_MANGA = 'SET_LOAD_MORE_MANGA'
const CLEAR_MANGA_PAGE = 'CLEAR_MANGA_PAGE'
const NEXT_MANGA_PAGE = 'NEXT_MANGA_PAGE'

const initialState = {
  mangaData: [],
  isMangaLoad: true,
  loadMoreManga: true,
  mangaPage: 1,
}

export const mangaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MANGA_DATA:
      return {
        ...state,
        mangaData: [...state.mangaData, ...action.manga],
      }
    case SET_MANGA_LOAD:
      return {
        ...state,
        isMangaLoad: action.isLoad,
      }
    case SET_LOAD_MORE_MANGA:
      return {
        ...state,
        loadMoreManga: action.loadMore,
      }
    case CLEAR_MANGA_DATA:
      return {
        ...state,
        mangaData: [],
      }
    case CLEAR_MANGA_PAGE:
      return {
        ...state,
        mangaPage: 1,
      }
    case NEXT_MANGA_PAGE:
      return {
        ...state,
        mangaPage: state.mangaPage + 1
      }
    default:
      return state
  }
}

export const clearManga = (userId, status,) => {
  return (dispatch) => {
    dispatch(clearMangaPage())
    dispatch(clearMangaData())
    dispatch(setLoadMoreManga(true))
    dispatch(getMangaData(userId, status, 1, true))
  }
}

export const getMangaData = (userId, status, page, loadMoreManga) => {
  return (dispatch) => {
    if (loadMoreManga) {
      dispatch(setMangaLoad(true))
      getManga(userId, page, status, MANGA_LIMIT)
        .then((mangaData) => {
          if (mangaData.length === MANGA_LIMIT + 1) {
            mangaData.pop()
            dispatch(setLoadMoreManga(true))
          } else {
            dispatch(setLoadMoreManga(false))
          }
          dispatch(setMangaData(mangaData))
          dispatch(nextMangaPage())
        })
        .catch((error) => {
          console.error(error)
        })
        .finally(() => dispatch(setMangaLoad(false)))
    }
  }
}
const clearMangaData = () => ({type: CLEAR_MANGA_DATA})
const clearMangaPage = () => ({type: CLEAR_MANGA_PAGE})
const setLoadMoreManga = (loadMore) => ({type: SET_LOAD_MORE_MANGA, loadMore})
const setMangaData = (manga) => ({type: SET_MANGA_DATA, manga})
export const setMangaLoad = (isLoad) => ({type: SET_MANGA_LOAD, isLoad})
const nextMangaPage = () => ({type: NEXT_MANGA_PAGE})
