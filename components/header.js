import React from 'react'
import Navigation from './navigation'
import Link from 'next/link'

export default function header({ children }) {
  return (
    <div className="sticky">
      <div className="page-block">
        <header className="header" aria-label="Barra supeior y menú del usuario">
          <div className="header-primary">
            <Navigation />
            {children}
          </div>
          <div>
            <Link href="/api/login">Login</Link>
          </div>
        </header>
      </div>
    </div>
  )
}
