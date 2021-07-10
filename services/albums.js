
import baseAPIFetch from '../utils/handle-promise'


export async function getAlbums() {
  return baseAPIFetch('albums')
}
