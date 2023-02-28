import React, {useEffect, useState} from 'react'
import {ANIME_SLIDER_ITEM} from '../../utils/const'
import {Slider} from '../../components/Slider/Slider'
import {clearAnimeData, getAnimeData, setAnimePage, setLoadMoreAnime} from '../../redux/animeReducer'
import {useDispatch, useSelector} from 'react-redux'
import styles from './Anime.module.scss'
import {CardList} from '../../components/ListCard/CardList'
import {Loader} from '../../components/Loader/Loader'

export const Anime = () => {
  const {plannedItem} = ANIME_SLIDER_ITEM
  const dispatch = useDispatch()
  const {animeData, isAnimeLoad, animePage, loadMoreAnime} = useSelector((state) => state.anime)
  const {id} = useSelector((state) => state.user.userData)
  const [activeBookmark, setActiveBookmark] = useState(plannedItem.id)

  useEffect(() => {
    animePage !== 1 &&
    dispatch(getAnimeData(id, activeBookmark, animePage, loadMoreAnime))
  }, [animePage])

  useEffect(() => {
    dispatch(setAnimePage(1))
    dispatch(clearAnimeData())
    dispatch(setLoadMoreAnime(true))
    dispatch(getAnimeData(id, activeBookmark, animePage, true))
  }, [activeBookmark])

  console.log(isAnimeLoad)

  return (
    <div className={styles.anime}>
      <Slider
        activeBookmark={activeBookmark}
        setActiveBookmark={setActiveBookmark}
        sliderItems={ANIME_SLIDER_ITEM}
      />
      {
        isAnimeLoad
          ? <Loader/>
          : <div className={styles.animeList}>
            {
              animeData.length === 0
                ? <div>Этот раздел пустует</div>
                : animeData.map(anime => {
                  return <CardList data={anime.anime} key={anime.id}/>
                })
            }
          </div>
      }
    </div>
  )
}
