import { BASE_API } from "../constants";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export async function getPlaylistList() {
  //cambie la ruta del fetch de ${BASE_API}me/playlists  a ${BASE_API}users/me/playlists
  const response = await fetch(`${BASE_API}me/playlists`, {
    headers: {
      Authorization: cookies.get("token"),
    },
  });
  const data = response.json();
  return data;
}

export async function getPlaylist(id) {
  const response = await fetch(`${BASE_API}playlists/${id}`, {
    headers: {
      Authorization: cookies.get("token"),
    },
  });
  const data = response.json();
  return data;
}

export async function getPlaylistTracks(id) {
  const response = await fetch(`${BASE_API}playlists/${id}/tracks`, {
    headers: {
      Authorization: cookies.get("token"),
    },
  });
  const data = response.json();
  return data;
}
