import React from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/anime-list.svg'
import { SettingsSvg } from '../svg/svgIcons'
import { NotificationSvg } from '../svg/svgIcons'

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt='' height={30} />
      <div className={styles.icons}>
        <NotificationSvg />
        <SettingsSvg />
      </div>
    </header>
  )
}

export default Header
