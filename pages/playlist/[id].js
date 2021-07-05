import React from 'react'
import Page from '../../components/playlist-page'
import { createContext, useState } from 'react'
import Base from '../../components/base'
import Header from '../../components/header'

export const TrackContext = createContext({})

export default function Playlist() {
  const [track, setTrack] = useState({})

  return (
    <TrackContext.Provider value={{value:track, setTrack}}>
      <Base>
        <Header />
        <Page />
      </Base>
    </TrackContext.Provider>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
