import React, { Component } from 'react'
import Header from '../Header/Header'
import './Chat.scss'

class Chat extends Component {
  constructor() {
    super()

    this.state = {
      message: "",
    }
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
    })
  }

  render() {
    return (
      <article className="chat">
        <Header title="PLS CHAT" />

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

        <div className="chat__user-input form">
          <label className="form__group">
            <input
              type="text"
              className="form__control"
              placeholder="Enter your message..."
              required
              onChange={ this.handleChange }
            />
          </label>

          <button
            onClick={ () => this.props.handleSubmit(this.state) }
            className="form__button">
            Send message
          </button>
        </div>
      </article>
    )
  }
}

export default Chat