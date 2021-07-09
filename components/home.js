import React from 'react'
import { getPlaylistList } from '../services/playlist'
import { getUserShows } from '../services/library'
import { useQuery } from 'react-query'
import PlaylistItemB from '../components/playlist-b'
import Skeleton from '../components/skeletonB'
import withLogging from '../hoc/with-logging'
import PlaylistItemA from './playlist-item-a'

function Home() {
  const { data: platlistList, isFetched } = useQuery('playlistList', getPlaylistList)
  const { data: shows, isFetched: showsAreFetched } = useQuery('shows', getUserShows)
  return (
    <main className="page-block">
      <section className="playlistList" aria-labelledby="region1">
        <div className="playlistList-top">
          <h2 className="playlistList-title" id="region1">
            Tus listas de producción
          </h2>
        </div>
        <div className="playlistList-container">
          {isFetched ? (
            platlistList.items.map(({ images, id, name }) => (
              <PlaylistItemB
                image={images[0]?.url}
                id={id}
                name={name}
                key={id}
              />
            ))
          ) : (
            <Skeleton id="loading" />
            // <PlaylistItemB id="loading" name="Cargando.." />
          )}
        </div>
      </section>

      <section className="playlistList" aria-labelledby="region2">
        <div className="playlistList-top">
          <h2 className="playlistList-title" id="region2">
            Tus Podcast favoritos
          </h2>

        </div>
        <div className="playlistList-container">
          {
            showsAreFetched ? (
              shows?.items.map(({ show }) => (
                <PlaylistItemA
                  key={show?.id}
                  image={show?.images[0]?.url}
                  type={show?.type}
                  id={show?.id}
                  name={show?.name}
                  description={show?.publisher}
                />
              ))
            )
            : null
          }
        </div>
      </section>
      <section className="playlistList" aria-labelledby="region3">
        <div className="playlistList-top">
          <h2 className="playlistList-title" id="region3">
            Otra categoría chingona
          </h2>
          <div className="navigation">
            <button
              className="navigation-prev"
              aria-label="Volver"
              title="Volver"
            >
              <i className="icon-arrowLeft" aria-hidden="true"></i>
            </button>
            <button
              className="navigation-next"
              disabled
              aria-label="Avanzar"
              title="avanzar"
            >
              <i className="icon-arrowRight" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div className="playlistList-container">
          <div className="playlistA">
            <div className="playlistA-cover">
              <img
                src="./images/anime-hits.png"
                width="150"
                height="150"
                alt="Cover de la playlist Anime Hits"
              />
              <button
                className="buttonIcon is-primary"
                aria-label="Reproducir"
                title="Reproducir"
              >
                <i className="icon-play" aria-hidden="true"></i>
              </button>
            </div>
            <h3 className="playlistA-title">Anime Hits</h3>
            <h4 className="playlistA-description">
              Naruto, Your Name, Weathing With You
            </h4>
          </div>


        </div>
      </section>

    </main>
  )
}

export default withLogging(Home)
