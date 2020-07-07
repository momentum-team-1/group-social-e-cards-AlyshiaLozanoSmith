import React from 'react'
import {
  Link
} from 'react-router-dom'

class Nav extends React.Component {
  render () {
    return (

      <div>
        <div className='nav-links'>
          <Link to='/profile'><p className='links'>Profile</p></Link>
          <Link to='/add-card'><p className='links'>New Cards</p></Link>

        </div>
      </div>

    )
  }
}

export default Nav
