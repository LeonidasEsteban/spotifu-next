
import { BASE_API } from '../constants'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export async function search(query) {
  const response = await fetch(`${BASE_API}search?q=${query}&type=track,artist`, {
    headers: {
      Authorization: cookies.get('token')
    }
  })
  const data = response.json()
  return data
}
