import Base from '../components/base'
import Header from '../components/header'
import Search from '../components/search'
import { useState } from 'react'

export default function Home() {
  const [artists, setArtist] = useState([])
  const [tracks, setTracks] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [otherAlbums, setnuevoalbum] = useState()
  return (
    <Base>
      <>
        <Header>
          <Search
            setArtist={setArtist}
            setTracks={setTracks}
            setInputValue={setInputValue}
          />
        </Header>

        <div className="search-artist">
          {artists.map((artist) => {
            console.log(artist.images)
            if (artist?.images[1]?.url) {
              return (
                <div className="search-artist-container">
                  <img
                    className="search-artist-image"
                    src={artist?.images[1]?.url}
                    alt=""
                  />
                  <p className="search-name-artist">{artist.name}</p>
                  <button className="search-artist-type">{artist.type}</button>
                  <button
                    className="buttonIcon is-primary"
                    aria-label="Reproducir"
                    title="Reproducir"
                  >
                    <i className="icon-play" aria-hidden="true"></i>
                  </button>
                </div>
              )
            }
          })}
        </div>
        <div className="search-track-container">
          {tracks.map((track) => {
            const minutes = Math.floor(track.duration_ms / 1000 / 60)
              .toString()
              .padStart(2, '00')
            const seconds = Math.floor((track.duration_ms / 1000) % 60)
              .toString()
              .padStart(2, '00')
            return (
              <div className="search-track-content">
                <div className="search-track-name">
                  <img src={track.album.images[0].url} alt="" />
                  <div className="search-track-artists">
                    <p className="search-track-nameSong">{track.name}</p>
                    <div>
                      {track.artists.map((artist) => {
                        return (
                          <p className="search-track-nameArtists">
                            {artist.name}
                          </p>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <p>{`${minutes}:${seconds}`}</p>
              </div>
            )
          })}
        </div>
      </>
    </Base>
  )
}
