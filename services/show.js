import baseAPIFetch from '../utils/handle-promise'


export async function getShow(id) {
  return baseAPIFetch(`shows/${id}`)
}
