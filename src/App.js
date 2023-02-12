import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import styles from './App.module.scss'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { changeStorage, useAuthStorage } from './utils/storage'
import { Auth } from './pages/Auth/Auth'
import {
  ACCESS_TOKEN,
  ACCESS_TOKEN_CREATED_AT,
  ACCESS_TOKEN_LIFE,
  AUTH_CODE,
  REFRESH_TOKEN,
} from './utils/const'
import { getAccessToken, getUserData, refreshAccessToken } from './api/authApi'
import { setIsAuth } from './redux/userReducer'

const App = () => {
  const [currentPage, setCurrentPage] = useState('main')
  const [authData, setAuthData] = useAuthStorage()
  const isAuth = useSelector((state) => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    if (
      authData[ACCESS_TOKEN_CREATED_AT] &&
      authData[REFRESH_TOKEN] !== '' &&
      authData[ACCESS_TOKEN_CREATED_AT] - Date.now() > ACCESS_TOKEN_LIFE
    ) {
      const currentDate = Date.now()
      refreshAccessToken(authData[REFRESH_TOKEN])
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
    if (authData[ACCESS_TOKEN] !== '') {
      getUserData()
        .then((data) => {
          console.log(data)
          dispatch(setIsAuth(true))
        })
        .catch((error) => {
          console.error(error)
        })
    } else if (authData[AUTH_CODE] !== '' && authData[REFRESH_TOKEN] === '') {
      const currentDate = Date.now()
      getAccessToken(authData[AUTH_CODE])
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
  }, [authData])

  return (
    <div className={styles.popup}>
      {isAuth ? (
        <div className={styles.popupContent}>
          <Header />
          <Content />
          <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
      ) : (
        <Auth />
      )}
    </div>
  )
}

export default App
