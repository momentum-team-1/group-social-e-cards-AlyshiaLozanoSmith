import React from 'react'
import Card from 'react-bootstrap/Card'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

export default function Cards ({ cards }) {
  console.log(cards)

  return (
    <div className='Cards'>
      <Jumbotron fluid>
        <Container fluid>
          <Row>
            {cards.map(card => {
              return (
                <div key={card.id}>
                  <Col xs={6} md={4}>
                    <Link to={`/card/${card.id}`}>
                      <Card style={{ width: '18rem' }} key={card.url}>
                        <Card.Body className={classNames({
                          backgroundBlue: card.color === 'blue',
                          backgroundPink: card.color === 'pink',
                          backgroundPurple: card.color === 'purple',
                          backgroundGreen: card.color === 'green',
                          backgroundYellow: card.color === 'yellow',
                          borderDotted: card.border_style === 'dotted',
                          borderSolid: card.border_style === 'solid',
                          borderDouble: card.border_style === 'double',
                          fontHelvetica: card.font === 'helvetica',
                          fontCourierNew: card.font === 'courier new',
                          fontMontserratSubrayada: card.font === 'montserratSubrayada',
                          fontGreatVibes: card.font === 'greatVibes',
                          fontBebasNue: card.font === 'bebasNue'
                        })}
                        >
                          <Card.Title>{card.card_name}</Card.Title>
                          <Card.Text>
                            {card.card_text}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Link>
                    <div>
                      <p>{card.user}</p>
                    </div>
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
