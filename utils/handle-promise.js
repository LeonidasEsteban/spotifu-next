import { BASE_API } from "../constants";
import Cookies from "universal-cookie";
const cookies = new Cookies();

async function handlePromise(url = '', method = 'GET', body = null) {
  const response = await fetch(`${BASE_API}${url}`, {
    headers: {
      Authorization: cookies.get("token"),
    },
    body
  });
  const data = await response.json();
  if (!response.ok) {
    if (response.status === 400) throw new Error('invalid token')
    throw new Error('something went wrong')
  }
  return data;
}

export default handlePromise