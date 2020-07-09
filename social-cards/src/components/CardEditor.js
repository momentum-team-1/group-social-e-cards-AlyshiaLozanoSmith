import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import classNames from 'classnames'

class CardEditor extends React.Component {
  constructor () {
    super()
    this.state = {
      title: '',
      text: '',
      color: '',
      font: 'helvetica',
      borderStyle: '',
      created: false
    }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleTitlechange = this.handleTitlechange.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
    this.handleFontChange = this.handleFontChange.bind(this)
    this.handleBorderChange = this.handleBorderChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTitlechange (event) {
    this.setState({ title: event.target.value })
  }

  handleTextChange (event) {
    this.setState({ text: event.target.value })
  }

  handleColorChange (event) {
    this.setState({ color: event.target.value })
  }

  handleFontChange (event) {
    this.setState({ font: event.target.value })
  }

  handleBorderChange (event) {
    this.setState({ borderStyle: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    axios
      .post('https://ecards-api-ben.herokuapp.com/api/cards/', {
        card_name: this.state.title,
        card_text: this.state.text,
        color: this.state.color,
        font: this.state.font,
        border_style: this.state.borderStyle
      },
      {
        headers: {
          Authorization: `Token ${this.props.token}`
        }
      })
      .then(response =>
        this.setState({ created: true }))
    console.log(this.state.color)
  }

  render () {
    if (this.state.created) {
      return <Redirect to='/all/cards/' />
    }

    return (
      <div>
        <h1>Create new cards!</h1>
        <Container fluid>
          <Row>
            <Col>
              <div className='card-form'>
                <div>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId='formAddCardTitle'>
                      <Form.Control type='text' placeholder='Card Title' value={this.state.title} onChange={this.handleTitlechange} required />
                    </Form.Group>

                    <Form.Group controlId='formAddCardText'>
                      <Form.Control type='text' placeholder='Card Text' value={this.state.text} onChange={this.handleTextChange} required />
                    </Form.Group>

                    <Form.Group controlId='formCardColor'>
                      <Form.Label>Card color</Form.Label>
                      <Form.Control as='select' onChange={this.handleColorChange}>
                        <option value=''>white</option>
                        <option value='pink'>China Pink</option>
                        <option value='purple'>English Violet</option>
                        <option value='blue'>Wild Blue Yonder</option>
                        <option value='yellow'>Deep Saffron</option>
                        <option value='green'>Laurel Green</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='formCardBorder'>
                      <Form.Label>Card Border</Form.Label>
                      <Form.Control as='select' onChange={this.handleBorderChange}>
                        <option value=''>none</option>
                        <option value='dotted'>dotted</option>
                        <option value='double'>double</option>
                        <option value='solid'>solid</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='formCardFont'>
                      <Form.Label>Card Font</Form.Label>
                      <Form.Control as='select' onChange={this.handleFontChange}>
                        <option value='helvetica'>helvetica</option>
                        <option value='courier new'>courier new</option>
                        <option value='montserratSubrayada' className='fontMontserratSubrayada'>Montserrat Subrayada</option>
                        <option value='greatVibes' className='fontGreatVibes'>Great Vibes</option>
                        <option value='bebasNeue' className='fontBebasNeue'>Bebas Neue</option>
                      </Form.Control>
                    </Form.Group>

                    <Button variant='primary' type='submit' name='submit' value='Submit'>
                Add Card
                    </Button>
                  </Form>
                </div>
              </div>
            </Col>
            <Col>
              <div className='preview'>
                <Card style={{ width: '18rem' }}>
                  <Card.Body className={classNames({
                    backgroundBlue: this.state.color === 'blue',
                    backgroundPink: this.state.color === 'pink',
                    backgroundPurple: this.state.color === 'purple',
                    backgroundGreen: this.state.color === 'green',
                    backgroundYellow: this.state.color === 'yellow',
                    borderDotted: this.state.borderStyle === 'dotted',
                    borderSolid: this.state.borderStyle === 'solid',
                    borderDouble: this.state.borderStyle === 'double',
                    fontHelvetica: this.state.font === 'helvetica',
                    fontCourierNew: this.state.font === 'courier new',
                    fontMontserratSubrayada: this.state.font === 'montserratSubrayada',
                    fontGreatVibes: this.state.font === 'greatVibes',
                    fontBebasNue: this.state.font === 'bebasNue'
                  })}
                  >
                    <Card.Title>{this.state.title}</Card.Title>
                    <Card.Text>
                      {this.state.text}
                    </Card.Text>
                  </Card.Body>
                </Card>

              </div>
            </Col>
          </Row>
        </Container>

      </div>
    )
  }
}

export default CardEditor
