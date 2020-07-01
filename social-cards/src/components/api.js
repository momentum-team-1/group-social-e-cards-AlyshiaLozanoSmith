import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:2000/api'
})

export function getToken (username, password) {
  return request.post('/auth/token/login', {
    username: username,
    password: password
  }).then(response => response.data.auth_token)
}
