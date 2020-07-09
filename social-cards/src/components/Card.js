import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import classNames from 'classnames'

export default function MyCard ({ card }) {
  console.log(card)
  return (
    <div className='Card'>
      <Jumbotron fluid>
        <Container fluid>
          <Card>
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
          <p>{card.user}</p>
        </Container>
      </Jumbotron>
    </div>
  )
}
