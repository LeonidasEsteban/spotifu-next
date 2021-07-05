import { BASE_API } from "../constants";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export async function getAlbums() {
  const response = await fetch(`${BASE_API}albums`, {
    headers: {
      Authorization: cookies.get("token"),
    },
  });
  const data = response.json();
  return data;
}
