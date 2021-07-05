import React from 'react'
import { useQuery } from 'react-query'
import { getPlaylistList } from '../services/playlist'
import Link from 'next/link'

export default function list() {
  const { data, isFetching, isFetched } = useQuery('playlistList', getPlaylistList)
  // console.log(playlistListQuery)
  // if (isError) return null
  if (!isFetched) return (
    <nav className="list">
      <p>Cargando...</p>
    </nav>
  )
  return (
    <nav className="list" aria-labelledby="Playlist">
      <h2 className="list-title" id="Playlist">Playlist</h2>
      <ul className="list-content">
        {
          data.items.map(playlist => (
            <li className="list-item" key={playlist.id}>
              <Link href={`/playlist/[id]`} as={`/playlist/${playlist.id}`}>
                <a className="link">{playlist.name}</a>
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
