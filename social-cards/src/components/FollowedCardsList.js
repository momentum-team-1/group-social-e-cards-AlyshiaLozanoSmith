import React from 'react'
import { getFollowedCards, getFollowedUsers } from './api'
import Cards from './Cards'

class FollowedCardsList extends React.Component {
  constructor () {
    super()
    this.state = {
      cards: [],
      followedUsers: []
    }
  }

  componentDidMount () {
    getFollowedCards(this.props.token).then(cards => this.setState({ cards: cards }))
    console.log('Component did mount')
    getFollowedUsers(this.props.token).then(followedUsers => ({ followed_users: followedUsers }))
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.token && this.props.token !== prevProps.token) {
      getFollowedCards(this.props.token).then(cards => this.setState({ cards: cards }))
      console.log('Cards have updated')
    }
  }

  render () {
    return (
      <div>
        <div className='followedUsers'>
          <h2>People you follow:</h2>
          {this.state.followedUsers.map(followedUser => <p key={followedUser.id}> {followedUser}</p>)}

        </div>
        <Cards cards={this.state.cards} />
      </div>
    )
  }
}

export default FollowedCardsList
