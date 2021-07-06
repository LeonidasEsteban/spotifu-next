import React from 'react'
import Base from '../../components/base'
import Header from '../../components/header'
import Head from 'next/head'
import { useRouter } from "next/router";
import PlaylistHero from "../../components/playlist-hero";
import PlaylistTable from "../../components/playlist-table";
import { useQuery } from "react-query";
import Track from "../../components/track";
import { getShow } from "../../services/show";


export default function Playlist() {
  const router = useRouter();
  const showId = router.query.id;
  const { data: show, isFetched } = useQuery(router.query.id, () => getShow(showId))
  return (
    <>
      <Head>
        <title>{show?.name}</title>
      </Head>
      <Header />
      <PlaylistHero
        name={show?.name}
        image={show?.images?.[0]?.url}
        description={show?.description}
        type={show?.type}
      />
      <PlaylistTable>
        {
          isFetched ?
            show?.episodes?.items.map((track, index) => (
              <Track
                name={track.name}
                image={track?.images[0]?.url}
                preview_url={track.audio_preview_url}
                type="show"
                groupId={show?.id}
                key={track.id}
                index={index + 1}
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
