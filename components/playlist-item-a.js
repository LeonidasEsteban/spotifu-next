import React from 'react'
import Link from 'next/link'

export default function PlaylistItemA({ type, image, name, description, id }) {
  return (
    <div className="playlistA">
      <Link href={`/${type}/${id}`}>
        <a className="playlistA-overlayLink"></a>
      </Link>
      <div className="playlistA-cover">
        <img
          src={image}
          width="150"
          height="150"
          alt={`Cover de ${name} ${description}`}
        />
        <button
          className="buttonIcon is-primary"
          aria-label="Reproducir"
          title="Reproducir"
        >
          <i className="icon-play" aria-hidden="true"></i>
        </button>
      </div>
      <h3 className="playlistA-title">{name}</h3>
      <h4 className="playlistA-description">
        {description}
      </h4>
    </div>
  )
}
