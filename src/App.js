import React, { Component } from 'react'
import Chat from './components/Chat/Chat'
import Loader from './components/Loader/Loader'
import Register from './components/Register/Register'
import './styles/app.scss'
import './App.scss'

class App extends Component {
  constructor() {
    super()

    this.state = {
      username: undefined,
      isConnected: false,
      isLoading: false,
      messages: [],
    }
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:9000/ws')

    this.socket.onmessage = () => {
      this.setState({
        messages: [...this.state.messages, JSON.parse(event.data)],
      })
    }
  }

  componentWillUnmount() {
    this.socket.close()
  }

  handleChatSubmit = (data, ev) => {
    const { username } = this.state
    const { message } = data
    const msg = {
      message,
      username,
    }

    this.socket.send(JSON.stringify(msg))

    ev.preventDefault()
  }

  handleRegisterSubmit = ({ username }) => {
    if (username !== "" && username !== undefined) {
      this.setState({
        username,
        isConnected: true,
      })
    }

    event.preventDefault()
  }

  render() {
    return (
      <div className="chat-container">
        { this.state.isLoading
          ? <Loader />
          : null
        }

        { this.state.isConnected
          ? <Chat handleSubmit={ this.handleChatSubmit } messages={ this.state.messages } />
          : <Register handleSubmit={ this.handleRegisterSubmit } />
        }
      </div>
    )
  }
}

export default App