import React from 'react'

class Profile extends React.Component {
  render () {
    console.log(this.props.username)
    return (

      <div className='profile'>
        <h1> Hello {this.props.username} !</h1>
        <div className='myCards'></div> />
      </div>
    )
  }
}

export default Profile
