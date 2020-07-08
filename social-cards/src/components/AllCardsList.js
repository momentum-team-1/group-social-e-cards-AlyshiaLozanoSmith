import React from 'react'
import { getAllCards } from './api'
import Cards from './Cards'

class AllCardsList extends React.Component {
  constructor () {
    super()
    this.state = {
      cards: []
    }
  }

  componentDidMount () {
    getAllCards(this.props.token).then(cards => this.setState({ cards: cards }))
    console.log('Component did mount')
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.token && this.props.token !== prevProps.token) {
      getAllCards(this.props.token).then(cards => this.setState({ cards: cards }))
      console.log('Cards have updated')
    }
  }

  render () {
    return (
      <Cards cards={this.state.cards} />
    )
  }
}

export default AllCardsList
