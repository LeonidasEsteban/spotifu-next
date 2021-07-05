import React from 'react'

export default function PlaylistTable({ children }) {
  return (
    <div className="playlistTable">
      <div className="playlistTable-head">
        <p className="playlistTable-index">#</p>
        <p className="playlistTable-title">Título</p>
        <p className="playlistTable-album">Album</p>
        <p className="playlistTable-date">Agregado el</p>
        <p className="playlistTable-time">
          <i className="icon-clock"></i>
        </p>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}
