import React from 'react'
import styles from './Header.module.scss'


export const HeaderNavItem = ({toggleClick, isActive, icon}) => {
  return (
    <div onClick={toggleClick} className={isActive && styles.active}>
      {icon}
    </div>

  )
}