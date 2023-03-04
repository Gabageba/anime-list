import React, {useEffect, useState} from 'react'
import {ModalWindow} from '../ModalWindow/ModalWindow'
import styles from './InfoModal.module.scss'
import {EditPlaylist, FavouriteFilledSvg, FavouriteOutlineSvg} from '../../svg/svgIcons'
import {ANIME_CARD_TYPE, ANIME_SLIDER_ITEM, MANGA_CARD_TYPE, MANGA_SLIDER_ITEM} from '../../../utils/const'
import {StatusChangeModal} from '../StatusChangeModal/StatusChangeModal'

export const InfoModal = ({setModalActive, name, isFavourite, status, type, editFavourite, setStatusModalActive}) => {
  const [statusName, setStatusName] = useState('')

  useEffect(() => {
    let sliderItems = {}
    if (type === ANIME_CARD_TYPE) {
      sliderItems = ANIME_SLIDER_ITEM
    } else if (type === MANGA_CARD_TYPE) {
      sliderItems = MANGA_SLIDER_ITEM
    }
    Object.keys(sliderItems).map(key => {
      if (sliderItems[key].id === status) {
        setStatusName(sliderItems[key].name)
      }
    })
  }, [])

  return (
    <ModalWindow setModalActive={setModalActive}>
      <div className={styles.name}>
        <h4 className={styles.ruName}>{name}</h4>
      </div>
      <div>
        {
          isFavourite
            ? <div className={`${styles.infoChange} ${styles.favouriteColor}`} onClick={editFavourite}>
              <FavouriteFilledSvg/>
              <span>Удалить из избранного</span>
            </div>
            : <div className={styles.infoChange} onClick={editFavourite}>
              <FavouriteOutlineSvg/>
              <span>Добавить в избранное</span>
            </div>
        }
        <div className={styles.infoChange} onClick={() => setStatusModalActive(true)}>
          <EditPlaylist/>
          <span>В списке: {statusName}</span>
        </div>
      </div>
    </ModalWindow>
  )
}