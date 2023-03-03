import { $authHost } from './index'

export const getFavourite = async (userId) => {
  const { data } = await $authHost.get(`/users/${userId}/favourites`)
  return data
}

export const addFavourite = async (linkedId, linkedType, kind) => {
  const { data } = await $authHost.post(`/favorites/${linkedType}/${linkedId}${linkedType === 'Person' ? '/' + kind : ''}`)
  return data
}

export const deleteFavourite = async (linkedId, linkedType) => {
  const { data } = await $authHost.delete(`/favorites/${linkedType}/${linkedId}`)
  return data
}
