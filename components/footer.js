import React, {useContext} from 'react'
import { TrackContext } from '../pages/playlist/[id]'

export default function Footer() {
  const track = useContext(TrackContext)
  console.log('foooter', track.value)
  if (!track?.value?.preview_url) return null
  return (
    <footer>
      <div className="player">
        {
          track?.value?.preview_url ?
          <audio src={track.value.preview_url} autoPlay></audio> : null
        }
        <div className="player-nowPlaying">
          <div className="nowPlaying">
            <div className="nowPlaying-cover">
              <img src={track.value.album.images[0].url} width="56" height="56"
                alt="Portada de Grand Escape (feat. Tokio Miura) de RADWIMPS, Toko Miura"
                title="Portada de Grand Escape (feat. Tokio Miura) de RADWIMPS, Toko Miura" />
            </div>
            <div className="nowPlaying-details">
              <div className="nowPlaying-description">
                <a href="#song" className="nowPlaying-title">
                  {track.value.name}
                </a>
                <a href="#RADWIMPS" className="nowPlaying-artist">
                  {track.value.artists[0].name}
                </a>
              </div>
              <div className="nowPlaying-actions">
                <button className="player-control" role="switch" aria-checked="false" aria-label="Guardar en tu biblioteca"
                  title="Guardar en tu biblioteca">
                  <i className="icon-heart" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="player-playerControls">
          <div className="playerControls">
            <div className="playerControls-buttons" aria-label="Controles de reproducción">
              <button className="buttonIcon" aria-label="Anterior" title="Anterior">
                <i className="icon-prev" aria-hidden="true"></i>
              </button>
              <button className="buttonIcon is-white" aria-label="Reproducir" title="Reproducir">
                <i className="icon-play" aria-hidden="true"></i>
              </button>
              <button className="buttonIcon" aria-label="Siguiente" title="Siguiente">
                <i className="icon-next" aria-hidden="true"></i>
              </button>
            </div>
            <div className="playerPlayback">
              <span className="playerPlayback-progressTime">01:40</span>
              <div className="playerPlayback-slider">
                <div className="slider">
                  <div className="slider-progress">
                    <button className="slider-buttton" aria-label="Controlar el progreso de la reproducción"></button>
                  </div>
                </div>
              </div>
              <span className="playerPlayback-progressTime">01:40</span>
            </div>
          </div>
        </div>
        <div className="player-playerVolume">
          <div className="playerVolume">
            <button className="player-control" aria-label="Silenciar" aria-describedby="volumen-icon">
              <i className="icon-volumeUp" id="volumen-icon" role="presentation" aria-label="Volumen alto"></i>
            </button>
            <div className="playerVolume-slider">
              <div className="slider">
                <div className="slider-progress">
                  <button className="slider-buttton" aria-label="Controlar el progreso de la reproducción"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
