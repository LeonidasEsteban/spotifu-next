function timeFormater(ms) {
  const minutes = Math.floor(ms / 1000 / 60)
    .toString()
    .padStart(2, "00");
  const seconds = Math.floor((ms / 1000) % 60)
    .toString()
    .padStart(2, "00");
    return  `${minutes}:${seconds}`
}

export default timeFormater