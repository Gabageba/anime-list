import React, {useEffect, useState} from 'react'
import {Slider} from '../../components/Slider/Slider'
import {FAVOURITE_SLIDER_ITEM} from '../../utils/const'
import {getFavouriteData} from '../../redux/favouriteReducer'
import {useDispatch, useSelector} from 'react-redux'
import {Loader} from '../../components/Loader/Loader'
import {BlockCard} from '../../components/BlockCard/BlockCard'
import styles from './Favourite.module.scss'
import {NoData} from '../../components/NoData/NoData'

export const Favourite = () => {
  const [activeFavourite, setActiveFavourite] = useState(FAVOURITE_SLIDER_ITEM.animesItem.id)
  const {id} = useSelector((state) => state.user.userData)
  const {favouriteData, isFavouriteLoad} = useSelector((state) => state.favourite)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFavouriteData(id))
  }, [])

  return (
    <div>
      <Slider activeBookmark={activeFavourite} setActiveBookmark={setActiveFavourite}
              sliderItems={FAVOURITE_SLIDER_ITEM}/>
        {
          isFavouriteLoad
            ? <Loader/>
            : favouriteData[activeFavourite].length === 0
              ? <NoData/>
              : <div className={styles.favouriteBlock}>
                {
                  favouriteData[activeFavourite].map(data => {
                    return <BlockCard data={data} linkChange={true}/>
                  })
                }
              </div>
        }

    </div>
  )
}
