import React from 'react'
import styles from './Loader.module.scss'

export const Loader = () => {
  return (
    <div className={styles.gooey}>
      <span className={styles.dot}></span>
      <div className={styles.dots}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}
