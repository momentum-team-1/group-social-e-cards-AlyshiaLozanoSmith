import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Login from './Login'
import Nav from './Nav'

class Header extends React.Component {
  constructor () {
    super()
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout (event) {
    event.preventDefault()

    this.props.setToken(null)
    window.localStorage.removeItem('login_auth_token')
    window.localStorage.removeItem('login_username')
  }

  render () {
    return (
      <div>
        <Router>
          <div>
            {this.props.token
              ? (
                <div className='header'>
                  <h1>E-greetings</h1>
                  <div className='nav-bar'>
                    <Nav />
                    <button onClick={this.handleLogout} className='logout'> Log out </button>
                  </div>
                </div>

              )
              : (
                <div>
                  <div className='header'>
                    <h1>E-Greetings</h1>
                  </div>

                  <div>
                    <Login setToken={this.props.setToken} username={this.props.username} />
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
