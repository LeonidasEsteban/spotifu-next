import React from 'react'
import Link from 'next/link'


export default function LoginButton() {
  return (
    <Link href="/api/login">
      <button className="loginButton">
        Iniciar Sesión
      </button>
    </Link>
  )
}
