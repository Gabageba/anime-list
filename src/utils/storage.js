import { ACCESS_TOKEN, ACCESS_TOKEN_CREATED_AT, AUTH, AUTH_CODE, REFRESH_TOKEN } from './const'
import { createChromeStorageStateHookSync } from 'use-chrome-storage'

export const AUTH_VALUE = {
  [AUTH_CODE]: '',
  [ACCESS_TOKEN]: '',
  [REFRESH_TOKEN]: '',
  [ACCESS_TOKEN_CREATED_AT]: null,
}

export const changeStorage = (setStorage, changes) => {
  if (changes === 'default') {
    setStorage(() => {
      return AUTH_VALUE
    })
  } else {
    setStorage((prevState) => {
      return {
        ...prevState,
        ...changes,
      }
    })
  }
}

export const useAuthStorage = createChromeStorageStateHookSync(AUTH, AUTH_VALUE)
