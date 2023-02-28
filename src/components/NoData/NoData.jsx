import React from 'react'
import styles from './NoData.module.scss'
import noData from '../../assets/emoji/no-data.png'

export const NoData = () => {
  return (
    <div>
      <div className={styles.noData}>
        <img src={noData}  width={80} alt="no-data"/>
        <h2>В этом разделе пусто...</h2>
      </div>
    </div>
  )
}
