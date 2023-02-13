import { $authHost } from './index'

export const getProfile = async (userId) => {
  const { data } = await $authHost(`/users/${userId}`)
  return data
}
