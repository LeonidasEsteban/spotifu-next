import React from "react";
import Link from "next/link";

export default function PlaylistB({
  image = "images/grand-scape.png",
  name,
  id,
}) {
  return (
    <div className="playlistB">
      <Link href={`/playlist/[id]`} as={`/playlist/${id}`}>
        <a className="playlistB-overlayLink"></a>
      </Link>

      <div className="playlistB-cover">
        <img
          src={image}
          width="76"
          height="76"
          alt={`Cover de la playlist ${name}`}
        />
      </div>
      <div className="playlistB-details">
        <h3 className="playlistB-title">{name}</h3>
        <div className="playlistB-control">
            <div
              className="buttonIcon is-primary"
              title={`Reproducir la lista de reproducción ${name}`}
              aria-label={`Reproducir la lista de reproducción ${name}`}
            >
              <i className="icon-play" aria-hidden="true"></i>
            </div>
        </div>
      </div>
    </div>
  );
}
