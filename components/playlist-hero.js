import React from 'react'

export default function PlaylistHero({
  name,
  description,
  type,
  image
}) {
  return (
    <div className="playlistHero">
      <img src={image} alt="" width="232" height="232" />
      <div className="playlistHero-content">
        <p className="playlistHero-type">{type}</p>
        <h1 className="playlistHero-name">{name}</h1>
        {description ? (
          <h2 className="playlistHero-description">{description}</h2>
        ) : null}
      </div>
    </div>
  )
}
