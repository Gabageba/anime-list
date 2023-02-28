import React from 'react'
import styles from './Footer.module.scss'
import { NavItem } from './NavItem/NavItem'
import { NAVIGATION_ITEM } from '../../utils/const'

const Footer = ({ currentPage, setCurrentPage }) => {
  return (
    <div className={styles.footer}>
      {Object.keys(NAVIGATION_ITEM).map((item) => (
        <NavItem
          unactive={NAVIGATION_ITEM[item].unactive}
          active={NAVIGATION_ITEM[item].active}
          name={NAVIGATION_ITEM[item].name}
          isActive={currentPage === NAVIGATION_ITEM[item].id}
          toggleClick={() => setCurrentPage(NAVIGATION_ITEM[item].id)}
        />
      ))}
    </div>
  )
}

export default Footer
