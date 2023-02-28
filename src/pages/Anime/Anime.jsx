import React, {useEffect, useState} from 'react'
import {ANIME_CARD_TYPE, ANIME_SLIDER_ITEM} from '../../utils/const'
import {Slider} from '../../components/Slider/Slider'
import {clearAnime, getAnimeData, setAnimeLoad} from '../../redux/animeReducer'
import {useDispatch, useSelector} from 'react-redux'
import styles from './Anime.module.scss'
import {CardList} from '../../components/ListCard/CardList'
import {Loader} from '../../components/Loader/Loader'
import {NoData} from '../../components/NoData/NoData'

export const Anime = () => {
  const {plannedItem} = ANIME_SLIDER_ITEM
  const dispatch = useDispatch()
  const {animeData, isAnimeLoad, animePage, loadMoreAnime} = useSelector((state) => state.anime)
  const {id} = useSelector((state) => state.user.userData)
  const [activeBookmark, setActiveBookmark] = useState(plannedItem.id)

  useEffect(() => {
    dispatch(setAnimeLoad(true))
    dispatch(clearAnime(id, activeBookmark))
  }, [activeBookmark])

  useEffect(() => {
    (isAnimeLoad &&  animeData.length !== 0) && dispatch(getAnimeData(id, activeBookmark, animePage, loadMoreAnime))
  }, [isAnimeLoad])


  useEffect(() => {
    const content = document.getElementById('contentBlock')

    const scrollHandler = () => {
      if (content.scrollTop + content.clientHeight >= content.scrollHeight) {
        dispatch(setAnimeLoad(true))
      }
    }
    if (loadMoreAnime) {
      content.addEventListener('scroll', scrollHandler)
      return function () {
        content.removeEventListener('scroll', scrollHandler)
      }
    } else {
      content.removeEventListener('scroll', scrollHandler)
    }
  }, [loadMoreAnime])

  return (
    <div className={styles.anime}>
      <Slider
        activeBookmark={activeBookmark}
        setActiveBookmark={setActiveBookmark}
        sliderItems={ANIME_SLIDER_ITEM}
      />
      <div className={styles.animeList}>
        {
          animeData.length === 0 && !isAnimeLoad
            ? <NoData/>
            : animeData.map(anime => {
              return <CardList data={anime.anime} key={anime.id} cardType={ANIME_CARD_TYPE}/>
            })
        }
        {isAnimeLoad && <Loader/>}
      </div>
    </div>
  )
}
