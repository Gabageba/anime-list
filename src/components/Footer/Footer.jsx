import React from 'react'
import styles from './Footer.module.scss'
import { FooterNavItem } from './FooterNavItem/FooterNavItem'
import { FOOTER_NAVIGATION_ITEMS } from '../../utils/const'

const Footer = ({ currentPage, setCurrentPage }) => {
  return (
    <div className={styles.footer}>
      {Object.keys(FOOTER_NAVIGATION_ITEMS).map((item) => (
        <FooterNavItem
          unactive={FOOTER_NAVIGATION_ITEMS[item].unactive}
          active={FOOTER_NAVIGATION_ITEMS[item].active}
          name={FOOTER_NAVIGATION_ITEMS[item].name}
          isActive={currentPage === FOOTER_NAVIGATION_ITEMS[item].id}
          toggleClick={() => setCurrentPage(FOOTER_NAVIGATION_ITEMS[item].id)}
        />
      ))}
    </div>
  )
}

export default Footer
