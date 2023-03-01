import React from 'react'
import styles from './Content.module.scss'
import {NAVIGATION_ITEMS} from '../../utils/const'

const Content = ({ currentPage }) => {
  return (
    <div className={styles.content} id={'contentBlock'}>
      {Object.keys(NAVIGATION_ITEMS).map(
        (item) => currentPage === NAVIGATION_ITEMS[item].id && NAVIGATION_ITEMS[item].page,
      )}
    </div>
  )
}

export default Content
