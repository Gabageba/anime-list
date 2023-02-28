import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import styles from './App.module.scss'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { useAuthStorage } from './utils/storage'
import { Auth } from './pages/Auth/Auth'
import {
  ACCESS_TOKEN,
  ACCESS_TOKEN_CREATED_AT,
  ACCESS_TOKEN_LIFE,
  AUTH_CODE,
  NAVIGATION_ITEM,
  REFRESH_TOKEN,
} from './utils/const'
import { getToken, getUser, refreshToken } from './redux/userReducer'
import { Loader } from './components/Loader/Loader'

const App = () => {
  const { animeItem } = NAVIGATION_ITEM
  const [currentPage, setCurrentPage] = useState(animeItem.id)
  const [authData, setAuthData] = useAuthStorage()
  const { isAuth, isAuthLoad } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(authData)
    if (
      authData[ACCESS_TOKEN_CREATED_AT] &&
      authData[REFRESH_TOKEN] !== '' &&
      Date.now() - authData[ACCESS_TOKEN_CREATED_AT] > ACCESS_TOKEN_LIFE
    ) {
      console.log('refresh token')
      dispatch(refreshToken(authData[REFRESH_TOKEN], setAuthData))
    } else if (authData[ACCESS_TOKEN] !== '') {
      dispatch(getUser())
    } else if (authData[AUTH_CODE] !== '' && authData[REFRESH_TOKEN] === '') {
      dispatch(getToken(authData[AUTH_CODE], setAuthData))
    }
  }, [authData])

  return (
    <div className={styles.popup}>
      {isAuthLoad ? (
        <Loader />
      ) : (
        <>
          {isAuth ? (
            <div className={styles.popupContent}>
              <Header />
              <Content currentPage={currentPage} />
              <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
          ) : (
            <Auth />
          )}
        </>
      )}
    </div>
  )
}

export default App
