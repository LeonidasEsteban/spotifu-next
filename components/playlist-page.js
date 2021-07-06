import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Track from "./track";
import { getPlaylist, getPlaylistTracks } from "../services/playlist";
import PlaylistHero from "./playlist-hero";
import PlaylistTable from "./playlist-table";
import { useQuery } from "react-query";

export default function PlaylistPage() {
  const router = useRouter();
  const playlistId = router.query.id;
  const { data: playlist } = useQuery(router.query.id, () => getPlaylist(playlistId))
  const { data: tracks, isFetched } = useQuery(router.query.id, () => getPlaylistTracks(playlistId))

  return (
    <>
      <PlaylistHero {...playlist} />
      <PlaylistTable>
        {
          isFetched ?
          tracks.tracks.items.map((track, index) => (
            <Track {...track} key={track.id} index={index + 1} />
          ))
          : 'cargando...'
        }
      </PlaylistTable>
    </>
  );
}
