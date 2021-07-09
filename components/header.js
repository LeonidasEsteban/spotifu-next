import React from 'react'
import Navigation from './navigation'
import LoginButton from './login-button'
import User from './user'
import useSession from '../hooks/use-session'

export default function header({ children }) {
  const {isLogged, isLoading } = useSession()
  return (
    <div className="sticky">
      <div className="page-block">
        <header className="header" aria-label="Barra supeior y menú del usuario">
          <div className="header-primary">
            <Navigation />
            {children}
          </div>
          {
            !isLoading && isLogged ? (
              <User />
            ) : (
              <LoginButton />
            )
          }
        </header>
      </div>
    </div>
  )
}
