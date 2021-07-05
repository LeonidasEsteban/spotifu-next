import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getPlaylistList } from '../services/playlist'

export default function Home() {
  const [playlist, setPlaylist] = useState([])
  useEffect(async () => {
      const data = await getPlaylistList()
      if(!data.error) {
        setPlaylist(data.items)
      }
  }, [])
  return (
      <main className="page-block">
        <section className="playlistList" aria-labelledby="region1">
          <div className="playlistList-top">
            <h2 className="playlistList-title" id="region1">
              Buenas noches
            </h2>

          </div>
          <div className="playlistList-container">
            {
              playlist.map((playlist) => (
                <div className="playlistB" key={playlist.id}>
                  <div className="playlistB-cover">
                    <img src={playlist.images[0].url} width="76" height="76" alt="Cover de la playlist Anime Hits" />
                  </div>
                  <div className="playlistB-details">
                    <h3 className="playlistB-title">{playlist.name}</h3>
                    <div className="playlistB-control">
                      <Link href={`/playlist/[id]`} as={`/playlist/${playlist.id}`}>
                        <a className="buttonIcon is-primary" title="Reproducir la lista de reproducción Naruto Openings & Endings"
                          aria-label="Reproducir la lista de reproducción Naruto Openings & Endings">
                          <i className="icon-play" aria-hidden="true"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </section>


        <section className="playlistList" aria-labelledby="region2">
          <div className="playlistList-top">
            <h2 className="playlistList-title" id="region2">
              Escuchado recientemente
            </h2>
            <div className="navigation">
              <button className="navigation-prev" aria-label="Volver" title="Volver">
                <i className="icon-arrowLeft" aria-hidden="true"></i>
              </button>
              <button className="navigation-next" disabled aria-label="Avanzar" title="avanzar">
                <i className="icon-arrowRight" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div className="playlistList-container">
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
          </div>
        </section>
        <section className="playlistList" aria-labelledby="region3">
          <div className="playlistList-top">
            <h2 className="playlistList-title" id="region3">
              Podcast
            </h2>
            <div className="navigation">
              <button className="navigation-prev" aria-label="Volver" title="Volver">
                <i className="icon-arrowLeft" aria-hidden="true"></i>
              </button>
              <button className="navigation-next" disabled aria-label="Avanzar" title="avanzar">
                <i className="icon-arrowRight" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div className="playlistList-container">
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
          </div>
        </section>
        <section className="playlistList" aria-labelledby="region4">
          <div className="playlistList-top">
            <h2 className="playlistList-title" id="region4">
              Lo mejor de lo mejor
            </h2>
            <div className="navigation">
              <button className="navigation-prev" aria-label="Volver" title="Volver">
                <i className="icon-arrowLeft" aria-hidden="true"></i>
              </button>
              <button className="navigation-next" disabled aria-label="Avanzar" title="avanzar">
                <i className="icon-arrowRight" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div className="playlistList-container">
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
            <div className="playlistA">
              <div className="playlistA-cover">
                <img src="./images/anime-hits.png" width="150" height="150" alt="Cover de la playlist Anime Hits" />
                <button className ="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
                <i className ="icon-play" aria-hidden="true"></i>
                </button>
              </div>
              <h3 className="playlistA-title">Anime Hits</h3>
              <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
            </div>
          </div>
        </section>
      </main>
  )
}
