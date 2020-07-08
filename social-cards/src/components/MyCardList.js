import React from 'react'
import { getMyCards } from './api.js'
import Cards from './Cards'

class MyCardsList extends React.Component {
  constructor () {
    super()
    this.state = {
      cards: []
    }
  }

  componentDidMount () {
    getMyCards(this.props.token).then(cards => this.setState({ cards: cards }))
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.token && this.props.token !== prevProps.token) {
      getMyCards(this.props.token).then(cards => this.setState({ cards: cards }))
      console.log('Cards have updated')
    }
  }

  render () {
    console.log(this.state.cards)
    return (
      <Cards cards={this.state.cards} />
    )
  }
}

export default MyCardsList
