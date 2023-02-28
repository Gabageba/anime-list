import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { useDispatch } from 'react-redux'
import { SlideItem } from './SlideItem'
import styles from './Slider.module.scss'

export const Slider = ({ activeBookmark, setActiveBookmark, sliderItems}) => {
  const dispatch = useDispatch()
  return (
    <ScrollContainer vertical={false} className={styles.slider}>
      {Object.keys(sliderItems).map((item) => (
        <SlideItem
          key={sliderItems[item].id}
          name={sliderItems[item].name}
          isActive={activeBookmark === sliderItems[item].id}
          toggleClick={() => {
            setActiveBookmark(sliderItems[item].id)
          }}
        />
      ))}
    </ScrollContainer>
  )
}
