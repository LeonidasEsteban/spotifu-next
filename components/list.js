import React from "react";
import { useQuery } from "react-query";
import { getPlaylistList } from "../services/playlist";
import { getAlbums } from "../services/albums";
import Link from "next/link";

export default function list() {
  const { data, isFetching } = useQuery("playlistList", getPlaylistList);
  if (isFetching)
    return (
      <nav className="list">
        <p>Cargando...</p>
      </nav>
    );
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
