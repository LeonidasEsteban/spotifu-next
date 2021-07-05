import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Track from "./track";
import { getPlaylist, getPlaylistTracks } from "../services/playlist";
import PlaylistHero from "./playlist-hero";
import PlaylistTable from "./playlist-table";

export default function PlaylistPage() {
  const [playlist, setPlaylist] = useState({});
  const [tracks, setTracks] = useState([]);

  const router = useRouter();
  useEffect(async () => {
    const playlistId = router.query.id;
    const dataPlaylist = await getPlaylist(playlistId);
    const dataTracks = await getPlaylistTracks(playlistId);
    setPlaylist(dataPlaylist);
    setTracks(dataTracks.items);
  }, [router.query.id]);
  return (
    <>
      <PlaylistHero {...playlist} />
      <PlaylistTable>
        {
          tracks.map((track, index) => (
            <Track {...track} index={index + 1} />
          ))
        }
      </PlaylistTable>
    </>
  );
}
