import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { SlideItem } from './SlideItem'
import styles from './Slider.module.scss'

export const Slider = ({ activeBookmark, setActiveBookmark }) => {
  return (
    <ScrollContainer vertical={false} className={styles.slider}>
      <SlideItem
        name={'Запланировано'}
        isActive={activeBookmark === 'planned'}
        toggleClick={() => setActiveBookmark('planned')}
      />
      <SlideItem
        name={'Смотрю'}
        isActive={activeBookmark === 'looking'}
        toggleClick={() => setActiveBookmark('looking')}
      />
      <SlideItem
        name={'Пересматриваю'}
        isActive={activeBookmark === 'reviewing'}
        toggleClick={() => setActiveBookmark('reviewing')}
      />
      <SlideItem
        name={'Просмотрено'}
        isActive={activeBookmark === 'viewed'}
        toggleClick={() => setActiveBookmark('viewed')}
      />
      <SlideItem
        name={'Отложено'}
        isActive={activeBookmark === 'postponed'}
        toggleClick={() => setActiveBookmark('postponed')}
      />
      <SlideItem
        name={'Брошено'}
        isActive={activeBookmark === 'abandoned'}
        toggleClick={() => setActiveBookmark('abandoned')}
      />
    </ScrollContainer>
  )
}
