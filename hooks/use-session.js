import Cookies from 'universal-cookie';
const cookies = new Cookies();
import {useEffect, useState } from 'react'


export default function useSession() {
  const [user, setUser] = useState({
    username: '',
    avatar: '',
    isLogged: false,
  })

  useEffect(() => {
    // const token = cookies.has('token')
    if (cookies.get('token')) {
      setUser({ ...user, isLogged: true })
    }
  }, [])

  return user
}