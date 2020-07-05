import React from 'react'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'

class Nav extends React.Component {
  render () {
    return (

      <Router>
        <div>
          <div className='nav-links'>
            <Link to='/profile'><p className='links'>Profile</p></Link>
            <Link to='/add-card'><p className='links'>New Cards</p></Link>
          </div>
        </div>
      </Router>

    )
  }
}

export default Nav
