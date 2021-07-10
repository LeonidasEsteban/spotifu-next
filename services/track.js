
import baseAPIFetch from '../utils/handle-promise'

export async function getTrack(id) {
  return baseAPIFetch(`tracks/${id}`)
}
