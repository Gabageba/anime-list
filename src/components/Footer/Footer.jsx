import React from 'react'
import styles from './Footer.module.scss'
import { NavItem } from './NavItem/NavItem'
import {
  BookmarksFilledSvg,
  BookmarksOutlineSvg,
  HomeFilledSvg,
  HomeOutlineSvg,
  ProfileOutlineSvg,
  SearchSvg,
  ProfileFilledSvg,
} from '../svg/svgIcons'
import { NAVIGATION_ITEM } from '../../utils/const'

const Footer = ({ currentPage, setCurrentPage }) => {
  const { mainItem, searchItem, bookmarksItem, profileItem } = NAVIGATION_ITEM

  return (
    <div className={styles.footer}>
      <NavItem
        unactive={<HomeOutlineSvg />}
        active={<HomeFilledSvg />}
        name={mainItem.name}
        isActive={currentPage === mainItem.id}
        toggleClick={() => setCurrentPage(mainItem.id)}
      />
      <NavItem
        unactive={<SearchSvg />}
        active={<SearchSvg />}
        name={searchItem.name}
        isActive={currentPage === searchItem.id}
        toggleClick={() => setCurrentPage(searchItem.id)}
      />
      <NavItem
        unactive={<BookmarksOutlineSvg />}
        active={<BookmarksFilledSvg />}
        name={bookmarksItem.name}
        isActive={currentPage === bookmarksItem.id}
        toggleClick={() => setCurrentPage(bookmarksItem.id)}
      />
      <NavItem
        unactive={<ProfileOutlineSvg />}
        active={<ProfileFilledSvg />}
        name={profileItem.name}
        isActive={currentPage === profileItem.id}
        toggleClick={() => setCurrentPage(profileItem.id)}
      />
    </div>
  )
}

export default Footer
