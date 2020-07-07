import React from 'react'
import { getCards } from './api'
import Card from 'react-bootstrap/Card'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import classNames from 'classnames'

class CardsList extends React.Component {
  constructor () {
    super()
    this.state = {
      cards: []
    }
  }

  componentDidMount () {
    if (this.props.token) {
      getCards(this.props.token).then(cards => this.setState({ cards: cards }))
      console.log('Cards have mounted')
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.token && this.props.token !== prevProps.token) {
      getCards(this.props.token).then(cards => this.setState({ cards: cards }))
      console.log('Cards have updated')
    }
  }

  render () {
    return (
      <div className='Cards'>
        <Jumbotron fluid>
          <Container fluid>
            <Row>
              {this.state.cards.map(card => {
                return (
                  <div key={card.id}>
                    <Col xs={6} md={4}>
                      <Card style={{ width: '18rem' }} key={card.url}>
                        <Card.Body className={classNames({
                          backgroundBlue: card.color === 'blue',
                          backgroundRed: card.color === 'red',
                          backgroundPurple: card.color === 'purple',
                          borderTopDotted: card.border_style === 'dotted',
                          borderBottomDotted: card.border_style === 'dotted',
                          borderSolid: card.border_style === 'solid',
                          borderDashed: card.border_style === 'dashed',
                          fontHelvetica: card.font === 'helvetica',
                          fontCourierNew: card.font === 'courier new'
                        })}
                        >
                          <Card.Text>
                            {card.card_text}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </div>
                )
              })}
            </Row>
          </Container>
        </Jumbotron>

      </div>
    )
  }
}

export default CardsList
