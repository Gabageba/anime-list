import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { SlideItem } from './SlideItem'
import styles from './Slider.module.scss'
import { ANIME_SLIDER_ITEM } from '../../../utils/const'

export const Slider = ({ activeBookmark, setActiveBookmark }) => {
  return (
    <ScrollContainer vertical={false} className={styles.slider}>
      {Object.keys(ANIME_SLIDER_ITEM).map((item) => (
        <SlideItem
          name={ANIME_SLIDER_ITEM[item].name}
          isActive={activeBookmark === ANIME_SLIDER_ITEM[item].id}
          toggleClick={() => setActiveBookmark(ANIME_SLIDER_ITEM[item].id)}
        />
      ))}
    </ScrollContainer>
  )
}
