import React, { memo } from "react";
import { getPlaylistList } from "../services/playlist";
import Link from "next/link";
import withLogging from "../hoc/with-logging";


import { useQuery } from "react-query";

function list() {
  const { data, isLoading } = useQuery("playlistList", getPlaylistList);
  if (isLoading) return (
    <nav className="list">
      <p>Cargando...</p>
    </nav>
  )
  return (
    <nav className="list" aria-labelledby="Playlist">
      <h2 className="list-title" id="Playlist">
        Playlist
      </h2>
      <ul className="list-content">
        {data.items.map((playlist) => (
          <li className="list-item" key={playlist.id}>
            <Link href={`/playlist/[id]`} as={`/playlist/${playlist.id}`}>
              <a className="link">{playlist.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default withLogging(memo(list))
