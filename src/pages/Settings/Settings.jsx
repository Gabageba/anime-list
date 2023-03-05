import React from 'react'
import {changeStorage, useAuthStorage} from '../../utils/storage'

export const Settings = () => {
  const [authData, setAuthData] = useAuthStorage()

  return (
    <div>
      <button onClick={() => changeStorage(setAuthData, 'default')}>clear</button>
      <div>settings</div>
    </div>
  )
}