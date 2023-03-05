import React, {useEffect, useState} from 'react'
import {MANGA_CARD_TYPE, MANGA_SLIDER_ITEM} from '../../utils/const'
import {Slider} from '../../components/Slider/Slider'
import {useDispatch, useSelector} from 'react-redux'
import styles from './Manga.module.scss'
import {ListCard} from '../../components/ListCard/ListCard'
import {Loader} from '../../components/Loader/Loader'
import {NoData} from '../../components/NoData/NoData'
import {clearManga, getMangaData, setMangaLoad} from '../../redux/mangaReducer'

export const Manga = () => {
  const {plannedItem} = MANGA_SLIDER_ITEM
  const dispatch = useDispatch()
  const {mangaData, isMangaLoad, mangaPage, loadMoreManga} = useSelector((state) => state.manga)
  const {id} = useSelector((state) => state.user.userData)
  const [activeBookmark, setActiveBookmark] = useState(plannedItem.id)

  useEffect(() => {
    if (id !== undefined) {
      dispatch(clearManga(id, activeBookmark))
    }
  }, [activeBookmark, id])

  useEffect(() => {
    (isMangaLoad &&  mangaData.length !== 0) && dispatch(getMangaData(id, activeBookmark, mangaPage, loadMoreManga))
  }, [isMangaLoad])


  useEffect(() => {
    const content = document.getElementById('contentBlock')

    const scrollHandler = () => {
      if (content.scrollTop + content.clientHeight >= content.scrollHeight) {
        dispatch(setMangaLoad(true))
      }
    }
    if (loadMoreManga) {
      content.addEventListener('scroll', scrollHandler)
      return function () {
        content.removeEventListener('scroll', scrollHandler)
      }
    } else {
      content.removeEventListener('scroll', scrollHandler)
    }
  }, [loadMoreManga])

  return (
    <div className={styles.manga}>
      <Slider
        activeBookmark={activeBookmark}
        setActiveBookmark={setActiveBookmark}
        sliderItems={MANGA_SLIDER_ITEM}
      />
      <div className={styles.mangaList}>
        {
          mangaData.length === 0 && !isMangaLoad
            ? <NoData/>
            : mangaData.map(manga => {
              return <ListCard data={manga.manga} key={manga.id} cardType={MANGA_CARD_TYPE} status={manga.status}/>
            })
        }
        {isMangaLoad && <Loader/>}
      </div>
    </div>
  )
}
