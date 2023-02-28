import React, { useState } from 'react'
import { MANGA_SLIDER_ITEM } from '../../utils/const'
import { Slider } from '../../components/Slider/Slider'

export const Manga = () => {
  const { plannedItem } = MANGA_SLIDER_ITEM
  const [activeBookmark, setActiveBookmark] = useState(plannedItem.id)
  return (
    <div>
      Manga
      <Slider
        activeBookmark={activeBookmark}
        setActiveBookmark={setActiveBookmark}
        sliderItems={MANGA_SLIDER_ITEM}
        clear={() => {}}
      />
    </div>
  )
}
