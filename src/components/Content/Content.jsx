import React from 'react'
import styles from './Content.module.scss'
import { Bookmarks } from '../../pages/Bookmarks/Bookmarks'
import { changeStorage, useAuthStorage } from '../../utils/storage'

const Content = () => {
  const [authData, setAuthData] = useAuthStorage()
  return (
    <div className={styles.content}>
      <Bookmarks />
      <button onClick={() => changeStorage(setAuthData, 'default')}>asdad</button>
    </div>
  )
}

export default Content
