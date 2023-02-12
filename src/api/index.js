import axios from 'axios'

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API,
})

const $host = axios.create({
  baseURL: process.env.REACT_APP_API,
})

const $token = axios.create({
  baseURL: process.env.REACT_APP_TOKEN_URL,
})

export { $authHost, $host, $token }
