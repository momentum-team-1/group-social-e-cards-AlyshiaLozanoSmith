import axios from 'axios'

const request = axios.create({
  baseURL: 'https://ecards-api-ben.herokuapp.com/'
})

export function getToken (username, password) {
  return request.post('/api/auth/token/login', {
    username: username,
    password: password
  }).then(response => response.data.auth_token)
}

export function getCards (url, token) {
  return request.get(url, {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(response => {
    return response.data
  })
}

export function getAllCards (token) {
  return getCards('/api/cards/ ', token)
}

export function getMyCard (token, username) {
  return getCards(`/api/user_cards/${username}/`, token)
}

export function getFollowedCards (token) {
  return getCards('')
}

export function deleteCard (token, cardId) {
  return request.delete(`/api/cards/${cardId}/`, {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(response => {
    console.log(response.data)
  })
}
