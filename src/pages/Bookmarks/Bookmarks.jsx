import React from 'react'
import { Slider } from './Slider/Slider'
import { useState } from 'react'

export const Bookmarks = () => {
  const [activeBookmark, setActiveBookmark] = useState('viewed')
  return (
    <div>
      <Slider activeBookmark={activeBookmark} setActiveBookmark={setActiveBookmark} />
    </div>
  )
}
