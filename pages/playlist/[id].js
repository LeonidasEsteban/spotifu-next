import React from 'react'
import Base from '../../components/base'
import Header from '../../components/header'
import Head from 'next/head'
import { useRouter } from "next/router";
import PlaylistHero from "../../components/playlist-hero";
import PlaylistTable from "../../components/playlist-table";
import { useQuery } from "react-query";
import Track from "../../components/track";
import { getPlaylist, getPlaylistTracks } from "../../services/playlist";



export default function Playlist() {

  const router = useRouter();
  const playlistId = router.query.id;
  const { data: playlist } = useQuery(router.query.id, () => getPlaylist(playlistId))
  const { data: tracks, isFetched } = useQuery(router.query.id, () => getPlaylistTracks(playlistId))
  console.log(tracks)
  return (
    <>
      <Head>
        <title>{playlist?.name}</title>
      </Head>
      <Header />
      <PlaylistHero
        name={playlist?.name}
        image={playlist?.images[0]?.url}
        description={playlist?.description}
        type={playlist?.type}
      />
      <PlaylistTable>
        {
          isFetched ?
            tracks.tracks.items.map((track, index) => (
              <Track
                {...track.track}
                image={track?.track?.album?.images[0].url}
                artist={track.track.artists?.[0].name}
                album={track.track.album.name}
                key={track.track.id}
                date={track.added_at}
                index={index + 1}
                groupId={playlist.id}
                type="music"
              />
            ))
            : 'cargando...'
        }
      </PlaylistTable>
    </>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
