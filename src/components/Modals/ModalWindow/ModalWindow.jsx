import React from 'react'
import styles from './ModalWindow.module.scss'

export const ModalWindow = ({children, setModalActive}) => {
  return (
    <div className={styles.modalWindow}>
      <div className={styles.modalWindowBackground} onClick={() => setModalActive(false)}></div>
      <div className={styles.modalBlock}>
        {children}
      </div>
    </div>

  )
}
