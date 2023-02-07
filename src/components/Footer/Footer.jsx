import React from 'react'
import styles from './Footer.module.scss'
import { NavItem } from './NavItem/NavItem'
import { useState } from 'react'
import {
  BookmarksFilledSvg,
  BookmarksOutlineSvg,
  HomeFilledSvg,
  HomeOutlineSvg,
  ProfileOutlineSvg,
  SearchSvg,
  ProfileFilledSvg,
} from '../svg/svgIcons'

const Footer = () => {
  const [currentPage, setCurrentPage] = useState('main')

  return (
    <div className={styles.footer}>
      <NavItem
        unactive={<HomeOutlineSvg />}
        active={<HomeFilledSvg />}
        name={'Главная'}
        isActive={currentPage === 'main'}
        toggleClick={() => setCurrentPage('main')}
      />
      <NavItem
        unactive={<SearchSvg />}
        active={<SearchSvg />}
        name={'Поиск'}
        isActive={currentPage === 'search'}
        toggleClick={() => setCurrentPage('search')}
      />
      <NavItem
        unactive={<BookmarksOutlineSvg />}
        active={<BookmarksFilledSvg />}
        name={'Закладки'}
        isActive={currentPage === 'bookmarks'}
        toggleClick={() => setCurrentPage('bookmarks')}
      />
      <NavItem
        unactive={<ProfileOutlineSvg />}
        active={<ProfileFilledSvg />}
        name={'Профиль'}
        isActive={currentPage === 'profile'}
        toggleClick={() => setCurrentPage('profile')}
      />
    </div>
  )
}

export default Footer
