import React, {useEffect, useState} from 'react'
import styles from './ListCard.module.scss'
import {MoreSvg, RatingSvg} from '../svg/svgIcons'
import {
  ANIME_TYPES,
  ANIME_STATUSES,
  ANIME_CARD_TYPE,
  MANGA_CARD_TYPE,
  MANGA_TYPES,
  MANGA_STATUSES,
  SHIKIMORI_URL,
  ANIME_SLIDER_ITEM, MANGA_SLIDER_ITEM
} from '../../utils/const'
import noImage from '../../assets/no-image.png'
import {InfoModal} from '../Modals/InfoModal/InfoModal'
import {useDispatch, useSelector} from 'react-redux'
import {addFavouriteData, deleteFavouriteData} from '../../redux/favouriteReducer'
import {StatusChangeModal} from '../Modals/StatusChangeModal/StatusChangeModal'

export const ListCard = ({data, cardType, status}) => {
  const dispatch = useDispatch()
  const [infoModalActive, setInfoModalActive] = useState(false)
  const [isFavourite, setIsFavourite] = useState(false)
  const [statusModalActive, setStatusModalActive] = useState(false)
  const {favouriteData} = useSelector((state) => state.favourite)

  const editFavourite = () => {
    const linkedType = cardType === ANIME_CARD_TYPE ? 'Anime' : cardType === MANGA_CARD_TYPE ? 'Manga' : ''
    if (isFavourite) {
      dispatch(deleteFavouriteData(data.id, linkedType, () => {
        setIsFavourite(false)
        setInfoModalActive(false)
      }))
    } else {
      dispatch(addFavouriteData(data.id, linkedType, () => {
        setIsFavourite(true)
        setInfoModalActive(false)
      }))
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
                <span>{data.status === 'ongoing' ? `${data.episodes_aired} ???? ${data.episodes === 0 ? '?' : data.episodes}` : data.episodes} ????</span>
                : cardType === MANGA_CARD_TYPE &&
                <span>{data.volumes !== 0 && `${data.volumes} ??, `}{`${data.chapters === 0 ? '?' : data.chapters} ????`}</span>}
              <span>??</span>
              <div className={styles.score}>
                <span>{data.score}</span>
                <RatingSvg/>
              </div>
            </div>
          }
        </div>
        <div className={styles.more} onClick={() => setInfoModalActive(true)}>
          <MoreSvg/>
        </div>
      </div>
      {infoModalActive &&
        <InfoModal setModalActive={setInfoModalActive}
                   setStatusModalActive={setStatusModalActive}
                   name={data.russian}
                   isFavourite={isFavourite}
                   type={cardType}
                   status={status}
                   editFavourite={editFavourite}

        />}
      {statusModalActive && <StatusChangeModal
        list={cardType === ANIME_CARD_TYPE ? ANIME_SLIDER_ITEM : cardType === MANGA_CARD_TYPE ? MANGA_SLIDER_ITEM : {}}
        type={cardType}
        closeModal={() => {setStatusModalActive(false)}}
        closeAll={() => {
          setStatusModalActive(false)
          setInfoModalActive(false)
        }}
        status={status}
      />}
    </div>)
}
