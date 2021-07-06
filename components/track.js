import React, { useContext } from "react";
import { getTrack } from "../services/track";
import { TrackContext } from "../pages/playlist/[id]";
import timeFormater from "../utils/time-formater";

export default function track({
  track: { id, name, artists, album, duration_ms, added_at, preview_url }, index
}) {
  const trackContext = useContext(TrackContext);
  async function handleTrackClick() {
    const track = await getTrack(id);
    trackContext.setTrack(track);
  }

  {
    return preview_url ? (
      <div className="playlistItem" onClick={handleTrackClick}>
        <span class="playlistItem-index">{index}</span>
        <div className="playlistItem-title">
          <img src={album.images[0].url} width="40" height="40" alt="" />
          <div className="playlistItem-description">
            <p className="playlistItem-name">{name}</p>
            <p className="playlistItem-artist">{artists[0].name}</p>
          </div>
        </div>
        <p className="playlistItem-name">{album.name}</p>
        <p className="playlistItem-date">{album.release_date}</p>
        <p className="playlistItem-time">{timeFormater(duration_ms)}</p>
      </div>
    ) : null;
  }
}
