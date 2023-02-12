import React, { useState } from 'react'
import styles from './Content.module.scss'
import { Bookmarks } from '../../pages/Bookmarks/Bookmarks'
import { changeStorage, useAuthStorage } from '../../utils/storage'
import { NAVIGATION_ITEM } from '../../utils/const'
import { Main } from '../../pages/Main/Main'
import { Search } from '../../pages/Search/Search'
import { Profile } from '../../pages/Profile/Profile'

const Content = ({ currentPage }) => {
  const [authData, setAuthData] = useAuthStorage()
  const { mainItem, searchItem, bookmarksItem, profileItem } = NAVIGATION_ITEM

  return (
    <div className={styles.content}>
      {currentPage === mainItem.id && <Main />}
      {currentPage === searchItem.id && <Search />}
      {currentPage === bookmarksItem.id && <Bookmarks />}
      {currentPage === profileItem.id && <Profile />}

      <button onClick={() => changeStorage(setAuthData, 'default')}>asdad</button>
    </div>
  )
}

export default Content
