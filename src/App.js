import React, {useState, useEffect} from 'react'
import Header from './components/Header/Header'
import styles from './App.module.scss'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import {useDispatch, useSelector} from 'react-redux'
import {useAuthStorage} from './utils/storage'
import {Auth} from './pages/Auth/Auth'
import {
  ACCESS_TOKEN,
  ACCESS_TOKEN_CREATED_AT,
  ACCESS_TOKEN_LIFE,
  AUTH_CODE, NAVIGATION_ITEMS,
  REFRESH_TOKEN,
} from './utils/const'
import {getToken, getUser, refreshToken, unLogin} from './redux/userReducer'
import {Loader} from './components/Loader/Loader'

const App = () => {
  const {animeItem} = NAVIGATION_ITEMS
  const [currentPage, setCurrentPage] = useState(animeItem.id)
  const [authData, setAuthData] = useAuthStorage()
  const {isAuth, isAuthLoad} = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(authData)
    if (
      authData[ACCESS_TOKEN_CREATED_AT] &&
      authData[REFRESH_TOKEN] !== '' &&
      Date.now() - authData[ACCESS_TOKEN_CREATED_AT] > ACCESS_TOKEN_LIFE
    ) {
      dispatch(refreshToken(authData[REFRESH_TOKEN], setAuthData))
    } else if (authData[ACCESS_TOKEN] !== '') {
      dispatch(getUser())
    } else if (authData[AUTH_CODE] !== '' && authData[REFRESH_TOKEN] === '') {
      dispatch(getToken(authData[AUTH_CODE], setAuthData))
    }
  }, [authData])

  useEffect(() => {
    chrome.storage.sync.get('auth').then(data => {
      if (
        data.auth[AUTH_CODE] === '' &&
        data.auth[ACCESS_TOKEN] === '' &&
        data.auth[REFRESH_TOKEN] === '' &&
        data.auth[ACCESS_TOKEN_CREATED_AT] === null
      ) {
        dispatch(unLogin())
      }
    })
  }, [])

  return (
    <div className={styles.popup}>
      {isAuthLoad ? (
        <Loader/>
      ) : (
        <>
          {isAuth ? (
            <div className={styles.popupContent}>
              <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
              <Content currentPage={currentPage}/>
              <Footer currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            </div>
          ) : (
            <Auth/>
          )}
        </>
      )}
    </div>
  )
}

export default App
