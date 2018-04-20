import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Header from '../Header/Header'
import './Chat.scss'

class Chat extends Component {
  handleChange = (event) => {
    this.setState({
      [`${event.target.name}`]: event.target.value,
    })
  }
  
  render() {
    return (
      <article className="chat">
        <Header title="Chat room" />

        <div className="chat__window">
          <div className="chat__messages">
            { this.props.messages.map((msg, idx) => (
              <div
                key={ `msg-${idx}` }
                className="chat__message">
                { msg.message }
              </div>
            )) }
          </div>
        </div>

        <form
          name="chat-form"
          className="chat__form form"
          onSubmit={ (event) => this.props.handleSubmit(this.state, event) }
        >
          <label className="form__group">
            <input
              type="text"
              name="message"
              placeholder="Enter your message..."
              className="form__control"
              onChange={ this.handleChange }
              required
              autoComplete="off"
            />
          </label>

          <button className="form__button">Send message</button>
        </form>
      </article>
    )
  }
}

Chat.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default Chat