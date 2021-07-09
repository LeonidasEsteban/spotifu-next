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
import useSession from '../../hooks/use-session'
import Cookies from 'universal-cookie'

export default function Playlist(props) {

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
        image={playlist?.images?.[0]?.url}
        description={playlist?.description}
        type={playlist?.type}
      />
      <PlaylistTable>
        {
          isFetched ?
            tracks?.tracks?.items.map((track, index) => (
              <Track
                {...track.track}
                image={track?.track?.album?.images[0].url}
                artist={track.track.artists?.[0].name}
                album={track.track.album.name}
                key={track.track.id}
                date={track.added_at}
                index={index}
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

const withSession = getServerSideProps => (ctx) => {
  const cookies = new Cookies(ctx.req.headers.cookie)
  if (!cookies.get('token')) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return getServerSideProps(ctx)
}

export const getServerSideProps = withSession(() => {
  return {
    props: {},
  }
})


