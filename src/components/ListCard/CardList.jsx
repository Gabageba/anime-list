import React from 'react'
import styles from './CardList.module.scss'
import {MoreSvg} from '../svg/svgIcons'
import {ANIME_TYPES, STATUSES} from '../../utils/const'

export const CardList = ({data}) => {
  const url = 'https://shikimori.one'
  return (
    <div className={styles.card}>
      <img
        className={styles.preview}
        src={`${url}${data.image.preview}`}
        alt='anime'
      />
      <div className={styles.info}>
        <div>
          <h4 className={styles.ruName}>{data.russian}</h4>
          <div className={styles.enName}>{data.name}</div>
          <div className={`${styles.about} ${styles.aboutBlock}`}>
            {
              ANIME_TYPES.map(type => {
                return type.id === data.kind && <span style={{backgroundColor: type.color}}>{type.name}</span>
              })
            }
            {
              STATUSES.map(status => {
                return status.id === data.status && <span style={{backgroundColor: status.color}}>{status.name}</span>
              })
            }
          </div>
          <div className={styles.about}>
            <span>{data.episodes} эп</span>
            <span>·</span>
            <div>
              <span>{data.score}</span>
            </div>
          </div>
        </div>
        <div className={styles.more}>
          <MoreSvg/>
        </div>
      </div>
    </div>
  )
}
