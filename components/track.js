import React, {useContext} from 'react'
import { getTrack } from '../services/track'
import { TrackContext } from '../pages/playlist/[id]'

export default function track({ track: { id, name, artists, album, duration_ms, added_at }}) {
  const trackContext = useContext(TrackContext)

  async function handleTrackClick() {
    const track = await getTrack(id)
    trackContext.setTrack(track)
    // console.log(track.preview_url)
  }
  return (
    <div className="song"  onClick={handleTrackClick}>
      <div className="album-song-buttons-content" >
        <button className="buttonIcon play" role="switch" aria-checked="false" aria-label="Reproducir canción de la lista">
          <i className="icon-play" role="switch" id="icon-play1" aria-hidden="true"></i>
        </button>
        <button className="btn-heart" role="switch" aria-checked="false" aria-label="Guardar en tu biblioteca">
          <i className="icon-heart" role="switch" aria-hidden="true" alt="hola"></i>
        </button>
      </div>
      <p className="name-song">{name}</p>
      <p className="name-artist">{artists[0].name}</p>
      <p className="album">{album.name}</p>
      {/* <p className="date-song">{new Intl.DateTimeFormat('ES-MX').format(new Date(added_at))}</p> */}
      {/* <p className="date-song">{new Date(added_at)}</p> */}
      <p className="time-song">{`${Math.floor(duration_ms / 1000 / 60)} : ${Math.floor(duration_ms / 1000 % 60)}`}</p>
    </div>
  )
}
