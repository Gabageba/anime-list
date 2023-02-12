import React, { useState } from 'react'
import { SLIDER_ITEM } from '../../utils/const'
import { Slider } from './Slider/Slider'

export const Bookmarks = () => {
  const { plannedItem } = SLIDER_ITEM
  const [activeBookmark, setActiveBookmark] = useState(plannedItem.id)

  return (
    <div>
      <Slider activeBookmark={activeBookmark} setActiveBookmark={setActiveBookmark} />
    </div>
  )
}
