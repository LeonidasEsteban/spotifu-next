import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import PlaylistHero from './playlist-hero.js'

const props = {
  name: 'Playlist de leo',
  description: 'Esta es un playlist bonita',
  type: 'show',
  image: ''
}

test('PlaylistHero',  () => {
  render(<PlaylistHero {...props}/>)
  expect(screen.getByText(/Playlist de leo/i)).toBeInTheDocument()
})

test('snapshot PlaylistHero', () => {
  const { asFragment } = render(<PlaylistHero {...props} />)
  expect(asFragment()).toMatchSnapshot()
})

