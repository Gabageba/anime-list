import { $host, $token, $authHost } from './index'

export const getAccessToken = async (code) => {
  const { data } = await $token.post('/token', {
    grant_type: 'authorization_code',
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
    code,
    redirect_uri: process.env.REACT_APP_REDIRECT_URI,
  })
  return data
}

export const refreshAccessToken = async (refreshToken) => {
  const { data } = await $token.post('/token', {
    grant_type: 'refresh_token',
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
    refreshToken,
  })
  return data
}

export const getUserData = async () => {
  const { data } = await $authHost.get('/users/whoami')
  return data
}
