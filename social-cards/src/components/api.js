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

export function getCards (token) {
  return request.get('/api/cards', {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(response => {
    return response.data
  })
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
