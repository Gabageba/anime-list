import React from 'react'
import styles from './Auth.module.scss'

export const Auth = () => {
  return (
    <div className={styles.auth}>
      <h3>Необходима авторизация в Shikimori</h3>
      <p>Вам необхидимо войти в свою учетную запись Shikimori, чтобы пользоваться расширением</p>
      <a href={process.env.REACT_APP_GET_AUTH_CODE} target='_blank' rel='noreferrer'>
        Войти в Shikimori
      </a>
    </div>
  )
}
