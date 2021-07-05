import Base from '../components/base'
import Header from '../components/header'
import Search from '../components/search'
import { useState } from 'react'

export default function Home() {
  const [artists, setArtist] = useState([])
  const [tracks, setTracks] = useState([])

  return (
    <Base>
      <>
        <Header>
          <Search setArtist={setArtist} setTracks={setTracks} />
        </Header>
        <h2>Artistas</h2>
        {artists.map(artist => (
          <div key={artist.id}>
            <img src={artist?.images[0]?.url} alt="" width="200"/>
            <p>{artist.name}</p>
          </div>
        ))}
        <h2>Canciones</h2>
        {
          tracks.map(track => (
            <div key={track.id}>
              <p>
                <img src={track.album.images[0].url} width="40" alt="" />
                <strong>{track.name}</strong> <br />
                <span>
                  {
                    track.explicit ? '[E] ' : null
                  }
                  {track.artists[0].name}
                </span>
              </p>
            </div>
          ))
        }
      </>
    </Base>
  )
}
