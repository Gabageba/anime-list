import axios from 'axios'
import { ACCESS_TOKEN } from '../utils/const'

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API,
})

const $host = axios.create({
  baseURL: process.env.REACT_APP_API,
})

const $token = axios.create({
  baseURL: process.env.REACT_APP_TOKEN_URL,
})

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${chrome.storage.sync.get([ACCESS_TOKEN])}`
  return config
}

$authHost.interceptors.request.use(authInterceptor)

export { $authHost, $host, $token }
