import { ACCESS_TOKEN, ACCESS_TOKEN_CREATED_AT, AUTH_CODE, REFRESH_TOKEN } from './const'
import { createChromeStorageStateHookSync } from 'use-chrome-storage'



export const changeStorage = (setStorage, changes) => {
  if (changes === 'default') {
    console.log('changeStorage default')
    setStorage(() => {
      return {
        [AUTH_CODE]: '',
        [ACCESS_TOKEN]: '',
        [REFRESH_TOKEN]: '',
        [ACCESS_TOKEN_CREATED_AT]: null,
      }
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

export const useAuthStorage = createChromeStorageStateHookSync('auth', {
  'authCode': '',
  'accessToken': '',
  'refreshToken': '',
  'accessTokenCreatedAt': null,
})
