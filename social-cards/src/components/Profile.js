import React from 'react'
import MyCardList from './MyCardList'

class Profile extends React.Component {
  render () {
    return (

      <div className='profile'>
        <h1> Hello {this.props.username} !</h1>
        <div className='myCards'>
          <MyCardList token={this.props.token} username={this.props.username} />
        </div>
      </div>
    )
  }
}

export default Profile
