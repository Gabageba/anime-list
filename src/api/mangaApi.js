import { $authHost } from './index'

export const getManga = async (userId, page, status, limit) => {
  const { data } = await $authHost.get(`/users/${userId}/manga_rates`, {
    params: {
      page,
      status,
      limit,
    },
  })
  return data
}
