import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Login from './Login'

class Header extends React.Component {
  constructor () {
    super()
    this.state = {
      token: window.localStorage.getItem('login_auth_token')

    }
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout (event) {
    event.preventDefault()

    this.setState({ token: null, username: '' })
    window.localStorage.removeItem('login_auth_token')
    window.localStorage.removeItem('login_username')
  }

  render () {
    return (
      <div>
        <Router>
          <div>
            {this.state.token
              ? (
                <div className='header'>
                  <h1>E-greetings</h1>
                  <div>
                    <button onClick={this.handleLogout}> Log out </button>
                  </div>
                </div>

              )
              : (
                <div>
                  <div className='header'>
                    <h1>E-Greetings</h1>
                  </div>

                  <div>
                    <Login setToken={this.props.setToken} />
                  </div>
                </div>
              )}
          </div>
        </Router>
      </div>
    )
  }
}
export default Header
