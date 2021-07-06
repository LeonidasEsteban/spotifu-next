import React from 'react'
import { search } from '../services/search'

export default function Search({ setArtist, setTracks, setInputValue }) {
  async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(event.target)
    const query = form.get('query')
    if (query.length > 0) {
      const { artists, tracks } = await search(query)
      setArtist(artists?.items)
      setTracks(tracks?.items)
      setInputValue(query.toLowerCase())
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="search"
      role="search"
      aria-label="Buscar por Artistas, canciones o podcast"
    >
      <i className="icon-search" aria-hidden="true"></i>
      <input
        name="query"
        autoFocus
        type="search"
        placeholder="Buscar por Artistas, canciones o podcast"
      />
    </form>
  )
}
