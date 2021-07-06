import React, {useContext, useRef, useEffect, useState } from 'react'
import { TrackContext } from '../pages/playlist/[id]'
import timeFormater from '../utils/time-formater'

export default function Footer() {
  const track = useContext(TrackContext)
  if (!track?.value?.preview_url) return null
  const audio = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progressTime, setProgressTime] = useState(timeFormater(0))
  const [progressPercentage, setProgressPercentage] = useState('0%')
  const [duration, setDuration] = useState(timeFormater(0))

  function handlePauseClick() {
    audio.current.pause()
  }
  function handlePlayClick() {
    audio.current.play()
  }
  function handlePlay() {
    setIsPlaying(true)
  }
  function handlePause() {
    setIsPlaying(false)
  }

  function handleLoadedMetaData() {
    setDuration(timeFormater(audio.current.duration * 1000))
  }


  function handleTimeUpdate() {
    setProgressTime(timeFormater(audio.current.currentTime * 1000))
    const percentage = audio.current.currentTime * 100 / audio.current.duration
    setProgressPercentage(`${percentage}%`)
  }

  useEffect(() => {
    if (track?.value?.preview_url) {
      audio.current = new Audio(track?.value?.preview_url)
      audio.current.addEventListener('play', handlePlay)
      audio.current.addEventListener('pause', handlePause)
      audio.current.addEventListener('loadedmetadata', handleLoadedMetaData)
      audio.current.addEventListener('timeupdate', handleTimeUpdate)
      audio.current.play()
    }

    return () => {
      if (audio.current) {
        audio.current.pause()
        audio.current.removeEventListener('play', handlePlay)
        audio.current.removeEventListener('pause', handlePause)
        audio.current.removeEventListener('timeupdate', handleTimeUpdate)
      }
    }
  }, [track])

  return (
    <footer>
      <div className="player">
        {/* {
          track?.value?.preview_url ?
          <audio ref={audio} src={track.value.preview_url} autoPlay></audio> : null
        } */}
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
              {
                isPlaying ? (
                  <button onClick={handlePauseClick} className="buttonIcon is-white" aria-label="Pause" title="Reproducir">
                    <i className="icon-pause" aria-hidden="true"></i>
                  </button>
                ) : (
                  <button onClick={handlePlayClick} className="buttonIcon is-white" aria-label="Reproducir" title="Reproducir">
                    <i className="icon-play" aria-hidden="true"></i>
                  </button>
                )
              }


              <button className="buttonIcon" aria-label="Siguiente" title="Siguiente">
                <i className="icon-next" aria-hidden="true"></i>
              </button>
            </div>
            <div className="playerPlayback">
              <span className="playerPlayback-progressTime">{progressTime}</span>
              <div className="playerPlayback-slider">
                <div className="slider">
                  <div className="slider-progress" style={{inlineSize: progressPercentage}}>
                    <button className="slider-buttton" aria-label="Controlar el progreso de la reproducción"></button>
                  </div>
                </div>
              </div>
              <span className="playerPlayback-progressTime">{duration}</span>
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
