import React from 'react'
import styles from './Content.module.scss'
import { NAVIGATION_ITEM } from '../../utils/const'

const Content = ({ currentPage }) => {
  return (
    <div className={styles.content} id={'contentBlock'}>
      {Object.keys(NAVIGATION_ITEM).map(
        (item) => currentPage === NAVIGATION_ITEM[item].id && NAVIGATION_ITEM[item].page,
      )}
    </div>
  )
}

export default Content
