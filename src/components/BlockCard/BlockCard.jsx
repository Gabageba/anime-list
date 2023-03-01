import React, {useState} from 'react'
import {SHIKIMORI_URL} from '../../utils/const'
import styles from './BlockCard.module.scss'

export const BlockCard = ({data, linkChange}) => {
  const [fullInfoActive, setFullInfoActive] = useState(false)

  return (
    <div className={styles.blockCard}>
      <img src={`${SHIKIMORI_URL}${linkChange ? data.image.replace('/x64/', '/preview/') : data.image}`} alt="preview"/>

      <div className={styles.infoBlock} onClick={() => setFullInfoActive(prev => !prev)}>
        <h4 className={`${styles.ruName} ${fullInfoActive  && styles.active}`}>{data.russian}</h4>
      </div>
    </div>
  )
}
