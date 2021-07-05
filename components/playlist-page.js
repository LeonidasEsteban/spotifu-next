import React from 'react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Track from './track'
import {getPlaylist, getPlaylistTracks} from '../services/playlist'
import PlaylistHero from './playlist-hero'

export default function PlaylistPage() {
  const [ playlist, setPlaylist ] = useState({})
  const [ tracks, setTracks ] = useState([])

  const router = useRouter()
  useEffect(async () => {
    console.log(router)
    const playlistId = router.query.id
    const dataPlaylist = await getPlaylist(playlistId)
    const dataTracks = await getPlaylist(playlistId)
    console.log('playlist', dataPlaylist, 'tracks', dataTracks)
    setPlaylist(dataPlaylist)
    setTracks(dataTracks.tracks.items)
  }, [router.query.id])



  return (
   <>

    <PlaylistHero {...playlist} />

    <div className="listSong-artist">
      {/* <div className="filter-song">
        <i className="icon-search"></i>
        <p>Filtrar</p>
      </div> */}
      <div className="song title">
        <div className="spacio-hidden"></div>
        <p className="name-song">Titulo</p>
        <p className="name-artist">Artista</p>
        <p className="album">album</p>
        <p className="date-song">Date</p>
        <p className="time-song">Time</p>
      </div>
      <div className="song-content" id="container-songs">
        {
            tracks.map(track => <Track {...track} key={track.id}/>)
        }


      </div>
      </div>
      </>
  )
}


