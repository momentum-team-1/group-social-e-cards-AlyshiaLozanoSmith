import React from 'react'
import { getToken } from './api'

class Login extends React.Component {
  constructor () {
    super()
    this.state = {
      password: '',
      username: '',
      error: null
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin (event) {
    event.preventDefault()
    getToken(this.state.username, this.state.password)
      .then(
        this.props.setToken,
        window.localStorage.setItem('login_auth_token', token)
      )
      .catch(error => {
        console.log(error)
        this.setState({ error: 'there is no user with that username and password' })
      })
  }

  render () {
    return (

      <div>
        <form onSubmit={this.handleLogin}>
          <div>
            {this.state.error}
          </div>
          <div>
            <label htmlFor='username'>Username</label>
            <input id='username' type='text' value={this.state.username} onChange={event => this.setState({ username: event.target.value })} />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input id='password' type='text' value={this.state.password} onChange={event => this.setState({ password: event.target.value })} />
          </div>
          <div>
            <button type='submit'>enter</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Login
