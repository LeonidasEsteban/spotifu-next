import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { renderHook } from '@testing-library/react-hooks'
import List from './list.js'
import nock from 'nock'

const data = {
  "href": "https://api.spotify.com/v1/users/1282564740/playlists?offset=0&limit=20",
    "items": [
      {
        "collaborative": false,
        "description": "",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/0CW3OVOIcge0pjEpOCCi0t"
        },
        "href": "https://api.spotify.com/v1/playlists/0CW3OVOIcge0pjEpOCCi0t",
        "id": "0CW3OVOIcge0pjEpOCCi0t",
        "images": [
          {
            "height": 640,
            "url": "https://mosaic.scdn.co/640/ab67616d0000b27322c920f91f03c82594842f31ab67616d0000b2734ed4c2e64f7bf0977aa70b42ab67616d0000b27352c1c6367b2ac402b31810b2ab67616d0000b2737f6090881fe21d405717af21",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://mosaic.scdn.co/300/ab67616d0000b27322c920f91f03c82594842f31ab67616d0000b2734ed4c2e64f7bf0977aa70b42ab67616d0000b27352c1c6367b2ac402b31810b2ab67616d0000b2737f6090881fe21d405717af21",
            "width": 300
          },
          {
            "height": 60,
            "url": "https://mosaic.scdn.co/60/ab67616d0000b27322c920f91f03c82594842f31ab67616d0000b2734ed4c2e64f7bf0977aa70b42ab67616d0000b27352c1c6367b2ac402b31810b2ab67616d0000b2737f6090881fe21d405717af21",
            "width": 60
          }
        ],
        "name": "Regueton",
        "owner": {
          "display_name": "Leonidas Eduardo Esteban González",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/1282564740"
          },
          "href": "https://api.spotify.com/v1/users/1282564740",
          "id": "1282564740",
          "type": "user",
          "uri": "spotify:user:1282564740"
        },
        "primary_color": null,
        "public": false,
        "snapshot_id": "MjksMTMxODFlNDlkZWUxMGExNGIzYTJjMmFmMjA3NmQ1ZDMxZjk4ZDczOQ==",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/0CW3OVOIcge0pjEpOCCi0t/tracks",
          "total": 25
        },
        "type": "playlist",
        "uri": "spotify:playlist:0CW3OVOIcge0pjEpOCCi0t"
      }
    ],
      "limit": 20,
        "next": "https://api.spotify.com/v1/users/1282564740/playlists?offset=20&limit=20",
          "offset": 0,
            "previous": null,
              "total": 78
}

const expectation = nock('https://api.spotify.com/v1/')
  .get('me/playlists')
  .reply(200, data);



test('List',  () => {
  render(<List />)
  expect(screen.getByText(/Playlist/i)).toBeInTheDocument()
})




