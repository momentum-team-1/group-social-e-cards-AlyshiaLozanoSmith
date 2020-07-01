import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Header from './components/Header'
import Login from './components/Login'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      token: null

    }
  }

  render () {
    return (
      <Router>
        <div>
          <Header />
          <div>
            {this.state.token
              ? <h2>Hello! {this.state.username}</h2>
              : <Login setToken={token => this.setState({ token: token })} />}

          </div>

        </div>
      </Router>
    )
  }
}

export default App
