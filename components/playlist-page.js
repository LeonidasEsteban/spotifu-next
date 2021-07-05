import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Track from "./track";
import { getPlaylist, getPlaylistTracks } from "../services/playlist";

export default function PlaylistPage() {
  const [playlist, setPlaylist] = useState({});
  const [tracks, setTracks] = useState([]);

  const router = useRouter();
  useEffect(async () => {
    console.log(router);
    const playlistId = router.query.id;
    const dataPlaylist = await getPlaylist(playlistId);
    const dataTracks = await getPlaylist(playlistId);
    console.log("playlist", dataPlaylist, "tracks", dataTracks);
    setPlaylist(dataPlaylist);
    setTracks(dataTracks.tracks.items);
  }, [router.query.id]);
  console.log(tracks);
  return (
    <>
      <section
        className="cover-artist"
        alt="Cover del artista"
        aria-label=""
      ></section>

      <div className="nameArtist">
        <h1 className="nameArtist-title">This is Bad Bunny</h1>
        <p className="nameArtist-name">Bad Bunny</p>
        <p className="nameArtist-followers">2,611,830 SEGUIDORES</p>
        <button className="nameArtist-button" id="button-random">
          Aleatorio
        </button>
      </div>
    </>
  );
}
