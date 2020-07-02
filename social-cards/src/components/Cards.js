import React from 'react'
import { GetCards } from './api'

class Cards extends React.Component {
  constructor () {
    super()
    this.state = {
      cards: []
    }
  }

  componentDidMount () {
    if (this.state.token) {
      this.getCards()
    }
  }

  getCards () {

  }

  render () {
    return (
      <ul>
        {this.state.Cards.map(card => <li key={card.id}>{card.message}</li>)}
      </ul>
    )
  }
}

export default Cards
