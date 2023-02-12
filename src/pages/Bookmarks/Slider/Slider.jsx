import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { SlideItem } from './SlideItem'
import styles from './Slider.module.scss'
import { SLIDER_ITEM } from '../../../utils/const'

export const Slider = ({ activeBookmark, setActiveBookmark }) => {
  const { plannedItem, lookingItem, reviewingItem, viewedItem, postponedItem, abandonedItem } =
    SLIDER_ITEM

  return (
    <ScrollContainer vertical={false} className={styles.slider}>
      <SlideItem
        name={plannedItem.name}
        isActive={activeBookmark === plannedItem.id}
        toggleClick={() => setActiveBookmark(plannedItem.id)}
      />
      <SlideItem
        name={lookingItem.name}
        isActive={activeBookmark === lookingItem.id}
        toggleClick={() => setActiveBookmark(lookingItem.id)}
      />
      <SlideItem
        name={reviewingItem.name}
        isActive={activeBookmark === reviewingItem.id}
        toggleClick={() => setActiveBookmark(reviewingItem.id)}
      />
      <SlideItem
        name={viewedItem.name}
        isActive={activeBookmark === viewedItem.id}
        toggleClick={() => setActiveBookmark(viewedItem.id)}
      />
      <SlideItem
        name={postponedItem.name}
        isActive={activeBookmark === postponedItem.id}
        toggleClick={() => setActiveBookmark(postponedItem.id)}
      />
      <SlideItem
        name={abandonedItem.name}
        isActive={activeBookmark === abandonedItem.id}
        toggleClick={() => setActiveBookmark(abandonedItem.id)}
      />
    </ScrollContainer>
  )
}
