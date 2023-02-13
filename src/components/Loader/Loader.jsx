import React from 'react'
import styles from './Loader.module.scss'

export const Loader = () => {
  return (
    <div className={styles.center}>
      <span className={styles.loader}></span>
    </div>
  )
}
