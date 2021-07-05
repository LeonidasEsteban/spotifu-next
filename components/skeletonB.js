import React from "react";

export default function SkeletonB({ id }) {
  return (
    <div className="playlistB" key={id}>
      <img
        src="images/skeletonB.png"
        alt="skeleton image"
        width="315"
        height="85.5"
        style={{ opacity: 0.5, objectFit: "cover" }}
      />
      {/* <div className="playlistB-cover">
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
          <Link href={`/playlist/[id]`} as={`/playlist/${id}`}>
            <a
              className="buttonIcon is-primary"
              title={`Reproducir la lista de reproducción ${name}`}
              aria-label={`Reproducir la lista de reproducción ${name}`}
            >
              <i className="icon-play" aria-hidden="true"></i>
            </a>
          </Link>
        </div>
      </div> */}
    </div>
  );
}
