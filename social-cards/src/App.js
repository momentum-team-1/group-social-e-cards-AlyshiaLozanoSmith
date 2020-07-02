import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Header from './components/Header'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      token: window.localStorage.getItem('login_auth_token')

    }
  }

  render () {
    return (
      <Router>
        <div>
          <Header token={this.state.token} setToken={token => this.setState({ token: token })} />

        </div>
      </Router>
    )
  }
}

export default App
