import React from 'react'
import styles from './FormsControls.module.scss'

export const ListRadioButton = ({name, id, statusName, currentStatus, setCurrentStatus}) => {
  return (
    <div className={styles.status} onClick={() => setCurrentStatus(id)}>
      <input name={name}  type='radio' id={id} value={id} className={styles.radioButton} checked={currentStatus === id}/>
      <label htmlFor={id}>{statusName}</label>
    </div>
  )
}