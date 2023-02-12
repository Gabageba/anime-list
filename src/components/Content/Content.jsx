import React, { useState } from 'react'
import styles from './Content.module.scss'
import { Bookmarks } from '../../pages/Bookmarks/Bookmarks'
import { changeStorage, useAuthStorage } from '../../utils/storage'
import { NAVIGATION_ITEM } from '../../utils/const'

const Content = () => {
  const [authData, setAuthData] = useAuthStorage()
  const { mainItem, searchItem, bookmarksItem, profileItem } = NAVIGATION_ITEM
  const [currentPage, setCurrentPage] = useState(mainItem.id)

  return (
    <div className={styles.content}>
      {currentPage === mainItem.id && <Bookmarks />}
      {currentPage === searchItem.id && <Bookmarks />}
      {currentPage === bookmarksItem.id && <Bookmarks />}
      {currentPage === profileItem.id && <Bookmarks />}

      <button onClick={() => changeStorage(setAuthData, 'default')}>asdad</button>
    </div>
  )
}

export default Content
