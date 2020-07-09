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
  return getCards('/api/cards/all/ ', token)
}

export function getMyCards (token, username) {
  return getCards('/api/cards/', token)
}

export function getFollowedCards (token) {
  return getCards('/api/cards/follower_cards/', token)
}

export function deleteCard (token, id) {
  return request.delete(`/api/cards/${id}/`, {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(response => {
    console.log(response.data)
  })
}

export function getCard (token, id) {
  return request.get(`/api/cards/${id}/`, {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(response => {
    return response.data
  })
}

export function getFollowedUsers (token) {
  return request.get('/api/following/ ', {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(res => {
    console.log('following', res.data)
    return res.data
  })
}
