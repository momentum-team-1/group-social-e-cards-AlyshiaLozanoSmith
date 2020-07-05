import React from 'react'
import { getCards } from './api'
import Card from 'react-bootstrap/Card'
import classNames from 'classnames'

class CardsList extends React.Component {
  constructor () {
    super()
    this.state = {
      cards: []
    }
    console.log('constructor')
  }

  componentDidMount () {
    if (this.props.token) {
      getCards(this.props.token).then(cards => this.setState({ cards: cards }))
      console.log('Cards have mounted')
      // this.setState({ card: this.state.card })
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.token && this.props.token !== prevProps.token) {
      getCards(this.props.token).then(cards => this.setState({ cards: cards }))
      console.log('Cards have updated')
    }
  }

  render () {
    if (!this.state.data) {
      console.log('no data')
    }

    const colorClasses = classNames({
      'backgound-blue': this.state.cards.color === 'blue'
    })

    return (
      <div className='Cards'>
        {console.log(this.props.token)}

        {this.state.cards.map(card => {
          return (
            <Card style={{ width: '18rem' }} key={card.url}>
              <Card.Body className={colorClasses}>
                <Card.Subtitle className='mb-2 text-muted'>{card.posted_at}</Card.Subtitle>
                <Card.Text>
                  {card.message}
                </Card.Text>
              </Card.Body>
            </Card>
          )
        })}

        {console.log(this.state.card)}

      </div>
    )
  }
}

export default CardsList
