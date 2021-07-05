
import querystring from 'querystring'
import cookies from '../../utils/cookies'

async function getToken(code) {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    method: 'POST',
    body: querystring.stringify({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      grant_type: 'authorization_code',
      code,
      redirect_uri: `${process.env.HOST}/api/callback`
    })
  })
  const data = await response.json()
  return data
}

export default cookies(async (req, res) => {

  const code = req.query.code
  const token = await getToken(code)
  const cookie = `${token.token_type} ${token.access_token}`

  res.cookie('token', cookie, {
    path: '/',
    maxAge: token.expires_in,
  })
  res.redirect('/')
})


