import Cookies from 'universal-cookie';
const cookies = new Cookies();
import {useEffect, useState } from 'react'


export default function useSession() {
  const [user, setUser] = useState({
    username: '',
    avatar: '',
    isLoading: true,
    isLogged: false,
  })

  useEffect(() => {
    // const token = cookies.has('token')
    if (cookies.get('token')) {
      setUser({ ...user, isLoading: false, isLogged: true })
    }
  }, [])

  return user
}