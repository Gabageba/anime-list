import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../../components/Loader/Loader'
import { getProfileData } from '../../redux/profileReducer'
import { MainInfo } from './MainInfo/MainInfo'
import styles from './Profile.module.scss'
import { ANIME_SLIDER_ITEM, DIAGRAM_COLORS, MANGA_SLIDER_ITEM } from '../../utils/const'
import { Diagram } from '../../components/Diagram/Diagram'

export const Profile = () => {
  const { id } = useSelector((state) => state.user.userData)
  const profileData = useSelector((state) => state.profile.profileData)
  const isLoad = useSelector((state) => state.profile.isProfileLoad)
  const dispatch = useDispatch()
  const diagramData = (hasItems, items, sliderItem) => {
    const result = {
      labels: [],
      data: [],
    }
    if (hasItems) {
      items.map((item) => {
        let name
        for (let key in sliderItem) {
          if (sliderItem[key].id === item.name) {
            name = `${sliderItem[key].name}: ${item.size}`
          }
        }
        if (!name) {
          name = 'undefined'
        }
        result.labels.push(name)
        result.data.push(item.size)
      })
    }
    return result
  }

  useEffect(() => {
    dispatch(getProfileData(id))
  }, [])

  return (
    <div className={styles.profile}>
      {isLoad ? (
        <Loader />
      ) : (
        <div>
          <MainInfo />
          <div className='line' />
          {profileData && profileData.stats['has_anime?'] && (
            <Diagram
              diagramItems={diagramData(
                profileData.stats['has_anime?'],
                profileData.stats.statuses.anime,
                ANIME_SLIDER_ITEM,
              )}
              name={'Статистика аниме'}
              colors={DIAGRAM_COLORS}
            />
          )}
          {profileData && profileData.stats['has_anime?'] && profileData.stats['has_manga?'] && (
            <div className='line' />
          )}
          {profileData && profileData.stats['has_manga?'] && (
            <Diagram
              diagramItems={diagramData(
                profileData.stats['has_manga?'],
                profileData.stats.statuses.manga,
                MANGA_SLIDER_ITEM,
              )}
              name={'Статистика манги'}
              colors={DIAGRAM_COLORS}
            />
          )}
        </div>
      )}
    </div>
  )
}
