import React from 'react'
import styles from './Slider.module.scss'

export const SlideItem = ({ name, isActive, toggleClick }) => {
  return (
    <div
      className={`${styles.slideItem} ${isActive && styles.slideItemActive}`}
      onClick={toggleClick}>
      <div className={styles.name}>{name}</div>
      {isActive && <div className={styles.line} />}
    </div>
  )
}
