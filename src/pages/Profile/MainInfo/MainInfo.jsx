import React from 'react'
import { useSelector } from 'react-redux'
import styles from './MainInfo.module.scss'

export const MainInfo = () => {
  const { image, nickname, sex, full_years } = useSelector((state) => state.profile.profileData)
  return (
    <div className={styles.mainInfo}>
      {image && <img className={styles.avatar} src={image.x80} alt={nickname} />}
      <div className={styles.info}>
        <h3> {nickname}</h3>
        <div className={styles.additionalInfo}>
          {sex && <span>{(sex === 'male' && 'муж / ') || (sex === 'female' && 'жен / ')}</span>}
          {full_years && <span>{full_years} лет</span>}
        </div>
      </div>
    </div>
  )
}
