import React, { useContext } from "react";
import { getTrack } from "../services/track";
import { TrackContext } from "../pages/playlist/[id]";

export default function track({
  track: { id, name, artists, album, duration_ms, added_at, preview_url },
}) {
  const trackContext = useContext(TrackContext);
  async function handleTrackClick() {
    const track = await getTrack(id);
    trackContext.setTrack(track);
  }
  const minutes = Math.floor(duration_ms / 1000 / 60)
    .toString()
    .padStart(2, "00");
  const seconds = Math.floor((duration_ms / 1000) % 60)
    .toString()
    .padStart(2, "00");
  {
    return preview_url ? (
      <div className="song" onClick={handleTrackClick}>
        <div className="album-song-buttons-content">
          <button
            className="buttonIcon play"
            role="switch"
            aria-checked="false"
            aria-label="Reproducir canción de la lista"
          >
            <i
              className="icon-play"
              role="switch"
              id="icon-play1"
              aria-hidden="true"
            ></i>
          </button>
          <button
            className="btn-heart"
            role="switch"
            aria-checked="false"
            aria-label="Guardar en tu biblioteca"
          >
            <i
              className="icon-heart"
              role="switch"
              aria-hidden="true"
              alt="hola"
            ></i>
          </button>
        </div>
        <p className="name-song">{name}</p>
        <p className="name-artist">{artists[0].name}</p>
        <p className="album">{album.name}</p>
        <p className="date-song">{album.release_date}</p>
        <p className="time-song">{`${minutes}:${seconds}`}</p>
      </div>
    ) : null;
  }
}
