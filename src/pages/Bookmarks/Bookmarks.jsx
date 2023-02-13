import React, { useState } from 'react'
import { ANIME_SLIDER_ITEM } from '../../utils/const'
import { Slider } from './Slider/Slider'

export const Bookmarks = () => {
  const { plannedItem } = ANIME_SLIDER_ITEM
  const [activeBookmark, setActiveBookmark] = useState(plannedItem.id)

  return (
    <div>
      <Slider activeBookmark={activeBookmark} setActiveBookmark={setActiveBookmark} />
    </div>
  )
}
