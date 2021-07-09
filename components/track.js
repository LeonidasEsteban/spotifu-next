import React, { useContext } from 'react'
import { getTrack } from '../services/track'
import { TrackContext } from '../pages/_app'
import timeFormater from '../utils/time-formater'

export default function track({id, groupId, type, name, image, artist, date, album, duration_ms = 0, added_at, preview_url, index, ...props}) {
  const trackContext = useContext(TrackContext)
  async function handleClick() {
    // const track = await getTrack(id)
    trackContext.setTrack({ id: groupId , type, start: index })
  }

  {
    return preview_url ? (
      <div className="playlistItem" onClick={handleClick}>
        <span className="playlistItem-index"></span>
        <div className="playlistItem-title">
          <img src={image} width="40" height="40" alt="" />
          <div className="playlistItem-description">
            <p className="playlistItem-name">{name}</p>
            <p className="playlistItem-artist">{artist}</p>
          </div>
        </div>
        <p className="playlistItem-name">{album}</p>
        <p className="playlistItem-date">{new Date(date).toDateString()}</p>
        <p className="playlistItem-time">{timeFormater(duration_ms)}</p>
      </div>
    ) : null
  }
}
