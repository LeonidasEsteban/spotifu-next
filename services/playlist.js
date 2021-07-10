import baseAPIFetch from '../utils/handle-promise'


export async function getPlaylistList() {
  return baseAPIFetch('me/playlists')
}


export async function getPlaylist(id) {
  return baseAPIFetch(`playlists/${id}`)
}


export async function getPlaylistTracks(id) {
  return baseAPIFetch(`playlists/${id}/tracks`)
}
