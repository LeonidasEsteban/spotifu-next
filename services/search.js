import baseAPIFetch from '../utils/handle-promise'

export async function search(query) {
  return baseAPIFetch(`search?q=${query}&type=track,artist`)
}
