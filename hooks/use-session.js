import Cookies from 'universal-cookie';
const cookies = new Cookies();
import {useEffect} from 'react'


export default function useSession() {
  useEffect(() => {
    cookies.get('token')
  }, [])
}