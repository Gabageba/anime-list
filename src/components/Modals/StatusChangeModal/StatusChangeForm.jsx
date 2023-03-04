import React, {useState} from 'react'
import styles from './StatusChangeModal.module.scss'
import {ListRadioButton} from '../../FormsControls/FormsControls'
import {putAnimeData} from '../../../redux/animeReducer'
import {useDispatch, useSelector} from 'react-redux'

export const StatusChangeForm = ({list, status, closeAll}) => {
  const [currentStatus, setCurrentStatus] = useState(status)
  const {id} = useSelector((state) => state.user.userData)
  const dispatch = useDispatch()

  const getStatuses = () => {
    const statuses = [{ id: 'clear', name: 'Без статуса',}]
    Object.keys(list).map(key => {
      statuses.push(list[key])
    })

    return statuses
  }

  const handleSubmit = () => {
    dispatch(putAnimeData(id, status, currentStatus, closeAll ))
  }

  return (
    <div className={styles.statusForm}>
      {
        getStatuses().map(status => {
          return <ListRadioButton name="radio-button"
                                  id={status.id}
                                  statusName={status.name}
                                  setCurrentStatus={setCurrentStatus}
                                  currentStatus={currentStatus}

          />
        })
      }
      <button className={styles.saveButton} onClick={handleSubmit}>Сохранить</button>
    </div>
  )
}


