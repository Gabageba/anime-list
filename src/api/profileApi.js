import { $authHost } from './index'

export const getProfile = async (userId) => {
  const { data } = await $authHost.get(`/users/${userId}`)
  return data
}
