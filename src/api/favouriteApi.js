import { $authHost } from './index'

export const getFavourite = async (userId) => {
  const { data } = await $authHost.get(`/users/${userId}/favourites`)
  return data
}
