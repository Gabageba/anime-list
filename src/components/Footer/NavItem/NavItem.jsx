import React from 'react'
import styles from './NavItem.module.scss'

export const NavItem = ({ active, unactive, name, toggleClick, isActive }) => {
  return (
    <div
      className={`${styles.navItem} ${isActive ? styles.active : styles.unactive} `}
      onClick={toggleClick}>
      <div className={styles.icon}>{isActive ? active : unactive}</div>
      <div className={styles.name}>{name}</div>
    </div>
  )
}
