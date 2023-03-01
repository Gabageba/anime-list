import React from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/anime-list.svg'
import { HEADER_NAVIGATION_ITEMS} from '../../utils/const'
import {HeaderNavItem} from './HeaderNavItem'

const Header = ({setCurrentPage, currentPage}) => {
  return (
    <header className={styles.header}>
      <img src={logo} alt='' height={30} />
      <div className={styles.icons}>
        {
          Object.keys(HEADER_NAVIGATION_ITEMS).map(navItem => {
            return <HeaderNavItem isActive={currentPage === HEADER_NAVIGATION_ITEMS[navItem].id}
                                  icon={HEADER_NAVIGATION_ITEMS[navItem].icon}
                                  toggleClick={() => setCurrentPage(HEADER_NAVIGATION_ITEMS[navItem].id)}
            />
          })
        }
      </div>
    </header>
  )
}

export default Header
