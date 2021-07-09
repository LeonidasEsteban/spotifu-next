import React from 'react'
import { render, screen } from '@testing-library/react'

import PlaylistHero from './playlist-hero.js'

const props = {
  name: 'Playlist de leo',
  description: 'Esta es un playlist bonita',
  type: 'show',
  image: ''
}

const propsNoDescription = {
  name: 'Playlist de leo',
  description: '',
  type: 'show',
  image: ''
}

test('PlaylistHero',  () => {
  render(<PlaylistHero {...props}/>)
  expect(screen.getByText(/Playlist de leo/i)).toBeInTheDocument()
})

test('PlaylistHero NoDescription', () => {
  render(<PlaylistHero {...propsNoDescription} />)
  expect(document.querySelector('.playlistHero-description')).not.toBeInTheDocument()
})

test('snapshot PlaylistHero', () => {
  const { asFragment } = render(<PlaylistHero {...props} />)
  expect(asFragment()).toMatchSnapshot()
})

