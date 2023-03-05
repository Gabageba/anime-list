import React, {useEffect} from 'react'
import styles from './Content.module.scss'
import {NAVIGATION_ITEMS} from '../../utils/const'
import {getFavouriteData} from '../../redux/favouriteReducer'
import {useDispatch, useSelector} from 'react-redux'

const Content = ({ currentPage }) => {
  const dispatch = useDispatch()
  const {id} = useSelector((state) => state.user.userData)

  useEffect(() => {
    if (id !== undefined) {
      dispatch(getFavouriteData(id))
    }
  }, [id])

  return (
    <div className={styles.content} id={'contentBlock'}>
      {Object.keys(NAVIGATION_ITEMS).map(
        (item) => currentPage === NAVIGATION_ITEMS[item].id && NAVIGATION_ITEMS[item].page,
      )}
    </div>
  )
}

export default Content
