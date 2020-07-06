import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class CardEditor extends React.Component {
  constructor () {
    super()
    this.state = {
      title: '',
      text: '',
      created: false
    }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleTitlechange = this.handleTitlechange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTitlechange (event) {
    this.setState({ title: event.target.value })
  }

  handleTextChange (event) {
    this.setState({ text: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    axios
      .post('https://ecards-api-ben.herokuapp.com/api/cards/', {
        card_name: this.state.title,
        card_text: this.state.text
      },
      {
        headers: {
          Authorization: `Token ${this.props.token}`
        }
      })
      .then(response =>
        this.setState({ created: true }))
  }

  render () {
    if (this.state.created) {
      return <Redirect to='/cards/all/' />
    }

    return (
      <div>
        <h1>Create new cards!</h1>
        <div className='card-form'>
          <form onSubmit={this.handleSubmit}>
            <div>

              <input type='text' placeholder='Card Text' value={this.state.text} onChange={this.handleTextChange} required />

              <input type='text' placeholder='Title' value={this.state.title} onChange={this.handleTitlechange} required />

              <button type='submit' id='submit' name='submit' value='Submit' className='button'>Add Card</button>

            </div>
          </form>
        </div>

      </div>
    )
  }
}

export default CardEditor
