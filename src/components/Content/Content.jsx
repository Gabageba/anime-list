import React from 'react'
import styles from './Content.module.scss'
import { Bookmarks } from '../../pages/Bookmarks/Bookmarks'

const Content = () => {
  return (
    <div className={styles.content}>
      <Bookmarks />
    </div>
  )
}

export default Content
