import React, {useState} from 'react'
import {ModalWindow} from '../ModalWindow/ModalWindow'
import styles from './StatusChangeModal.module.scss'
import {StatusChangeForm} from './StatusChangeForm'
import {ANIME_CARD_TYPE, MANGA_CARD_TYPE} from '../../../utils/const'

export const StatusChangeModal = ({list, closeModal, status, closeAll, type}) => {
  return (
    <ModalWindow setModalActive={closeModal}>
      <div className={styles.statusChangeModal}>
        <h3>Выберите статус {type === ANIME_CARD_TYPE ? 'просмотра' : type === MANGA_CARD_TYPE && 'чтения'}</h3>
        <StatusChangeForm list={list} status={status} closeAll={closeAll}/>
      </div>
    </ModalWindow>
  )
}

