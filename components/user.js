import React from 'react'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export default function User() {
  function handleClick() {
    cookies.remove('token')
    document.location.reload()
  }

  return (
    <button className="loginButton"  onClick={handleClick}>
      Cerrar sesión
    </button>
  )
}
