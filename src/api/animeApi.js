import { $authHost } from './index'

export const getAnime = async (userId, page, status, limit) => {
  const { data } = await $authHost.get(`/users/${userId}/anime_rates`, {
    params: {
      page,
      status,
      limit,
    },
  })
  return data
}
