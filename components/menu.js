import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Menu() {
  const router = useRouter()
  const currentPage = router.route
  return (
    <nav className="menu" aria-label="Principal">
      <ul className="menu-list">
        <li className="menuItem">
          <Link href="/" >
            <a className="link" aria-current={(currentPage === '/') ? 'page' : null}>
              <i className="icon-home" aria-hidden="true"></i>
              <span>Inicio</span>
            </a>
          </Link>
        </li>
        <li className="menuItem ">
          <Link href="/search">
            <a className="link" aria-current={(currentPage === '/search')? 'page': null}>
              <i className="icon-search" aria-hidden="true"></i>
              <span>Buscar</span>
            </a>
          </Link>
        </li>
        <li className="menuItem">
          <Link href="/library">
            <a className="link" aria-current={(currentPage === '/library')? 'page': null}>
              <i className="icon-creditCard" aria-hidden="true"></i>
              <span>Biblioteca</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
