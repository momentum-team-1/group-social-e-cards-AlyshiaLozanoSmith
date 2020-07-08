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
  render () {
    return (
      <div>
        <div>
          {this.props.token
            ? (
              <div className='header'>
                <h1>E-greetings</h1>
                <div className='nav-bar'>
                  <Nav />
                  <Link to='/logout/'>Log out</Link>
                </div>
              </div>

            )
            : (
              <div>
                <div className='header'>
                  <h1>E-Greetings</h1>
                </div>

                <div>
                  <Login token={this.props.token} username={this.props.username} setToken={this.props.setToken} />
                </div>
              </div>
            )}
        </div>
      </div>
    )
  }
}
export default Header
