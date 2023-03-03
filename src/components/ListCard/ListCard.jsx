import React, {useEffect, useState} from 'react'
import styles from './ListCard.module.scss'
import {MoreSvg, RatingSvg} from '../svg/svgIcons'
import {
  ANIME_TYPES, ANIME_STATUSES, ANIME_CARD_TYPE, MANGA_CARD_TYPE, MANGA_TYPES, MANGA_STATUSES, SHIKIMORI_URL
} from '../../utils/const'
import noImage from '../../assets/no-image.png'
import {InfoModal} from '../Modals/InfoModal/InfoModal'
import {useDispatch, useSelector} from 'react-redux'
import {addFavouriteData, deleteFavouriteData} from '../../redux/favouriteReducer'

export const ListCard = ({data, cardType, status}) => {
  const dispatch = useDispatch()
  const [modalActive, setModalActive] = useState(false)
  const [isFavourite, setIsFavourite] = useState(false)
  const {favouriteData} = useSelector((state) => state.favourite)

  const editFavourite = () => {
    const linkedType = cardType === ANIME_CARD_TYPE ? 'Anime' : cardType === MANGA_CARD_TYPE ? 'Manga' : ''
    if (isFavourite) {
      dispatch(deleteFavouriteData(data.id, linkedType, setIsFavourite))
    } else {
      dispatch(addFavouriteData(data.id, linkedType, setIsFavourite))
    }
  }

  useEffect(() => {
    favouriteData.length !== 0 &&
    favouriteData[cardType].map(favourite => {
      favourite.id === data.id && setIsFavourite(true)
    })
  }, [favouriteData])

  return (
    <div className={styles.card}>
      <div className={styles.preview}>
        <img
          src={`${SHIKIMORI_URL}${data.image.preview}` || noImage}
          alt="anime"
        />
      </div>
      <div className={styles.info}>
        <div>
          <h4 className={styles.ruName}>{data.russian}</h4>
          <div className={styles.enName}>{data.name}</div>
          <div className={`${styles.about} ${styles.aboutBlock}`}>
            {cardType === ANIME_CARD_TYPE
              ? ANIME_TYPES.map(type => {
                return type.id === data.kind && <span style={{backgroundColor: type.color}}>{type.name}</span>
              })
              : cardType === MANGA_CARD_TYPE && MANGA_TYPES.map(type => {
              return type.id === data.kind && <span style={{backgroundColor: type.color}}>{type.name}</span>
            })}

            {cardType === ANIME_CARD_TYPE
              ? ANIME_STATUSES.map(status => {
                return status.id === data.status && <span style={{backgroundColor: status.color}}>{status.name}</span>
              })
              : cardType === MANGA_CARD_TYPE &&
              MANGA_STATUSES.map(status => {
                return status.id === data.status && <span style={{backgroundColor: status.color}}>{status.name}</span>
              })}
          </div>
          {
            data.status !== 'anons' &&
            <div className={styles.about}>
              {cardType === ANIME_CARD_TYPE
                ?
                <span>{data.status === 'ongoing' ? `${data.episodes_aired} из ${data.episodes === 0 ? '?' : data.episodes}` : data.episodes} эп</span>
                : cardType === MANGA_CARD_TYPE &&
                <span>{data.volumes !== 0 && `${data.volumes} т, `}{`${data.chapters === 0 ? '?' : data.chapters} гл`}</span>}
              <span>·</span>
              <div className={styles.score}>
                <span>{data.score}</span>
                <RatingSvg/>
              </div>
            </div>
          }
        </div>
        <div className={styles.more} onClick={() => setModalActive(true)}>
          <MoreSvg/>
        </div>
      </div>
      {modalActive &&
        <InfoModal setModalActive={setModalActive}
                   name={data.russian}
                   isFavourite={isFavourite}
                   type={cardType}
                   status={status}
                   editFavourite={editFavourite}
        />}
    </div>)
}
