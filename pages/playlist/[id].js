import React from 'react'
import Body from '../../components/body'
import Logo from '../../components/logo'
import Sidebar from '../../components/sidebar'
import Layout from '../../components/layout'
import Menu from '../../components/menu'
import List from '../../components/list'
import Footer from '../../components/footer'
import Page from '../../components/playlist-page'
import { playlistItems, otherListItems } from '../../data'
import { getPlaylistList} from '../../services/playlist'
import { createContext, useState } from 'react'

export const TrackContext = createContext({})

export default function Playlist({ tracks }) {
  const [track, setTrack] = useState({})

  // function updateTrack(data) {
  //   setTrack(data)
  // }
  return (
    <TrackContext.Provider value={{value:track, setTrack}}>
      <Body>
        <Layout>
          <Sidebar>
            <Logo />
            <Menu />
            <List
              items={playlistItems}
              title="Playlist"
              id="playlist-navigation"
            />
            <List
              items={otherListItems}
              title="Other List"
              id="otherList-navigation"
            />
          </Sidebar>
          <Page tracks={tracks} />
          <Footer />
        </Layout>
      </Body>
    </TrackContext.Provider>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

// export async function getStaticProps() {
//   return {
//     props: {
//       tracks: []
//     }
//   }
// }

// export async function getStaticPaths() {
//   const playlist = await getPlaylistList()
//   console.log(playlist)
//   const paths = playlist.items.map(playlist => playlist.id)
//   return {
//     paths
//   }
// }