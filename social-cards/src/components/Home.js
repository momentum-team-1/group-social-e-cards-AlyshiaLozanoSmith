import React from 'react'
import Header from './Header'

class Home extends React.Component {
  render () {
    return (
      <div>
        <Header token={this.state.token} setToken={token => this.setState({ token: token })} username={this.state.username} />
      </div>
    )
  }
}

export default Home
