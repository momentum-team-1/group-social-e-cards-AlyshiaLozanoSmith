import React from 'react'
import CardsList from './CardsList'

class Profile extends React.Component {
  render () {
    return (
      <div className='profile'>
        <h1> Hello {this.props.username} !</h1>
        <CardsList username={this.props.username} token={this.props.token} />

      </div>
    )
  }
}

export default Profile
