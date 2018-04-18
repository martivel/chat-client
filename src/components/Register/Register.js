import React, { Component } from 'react'
import Header from '../Header/Header'
import "./Register.scss"

class Register extends Component {
  constructor() {
    super()
    this.state = {
      username: undefined,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      username: event.target.value,
    })
  }

  render() {
    return (
      <article className="register">
        <Header title="Register here" />

        <div className="register__body form">
          <label className="form__group">
            <span className="form__title">Username *</span>
            <input
              type="text"
              className="form__control"
              placeholder="Please fill in your username"
              required
              onChange={ this.handleChange }
            />
          </label>

          <button className="form__button" onClick={ () => this.props.handleSubmit(this.state) }>Sign in</button>
        </div>

        <footer className="register__disclaimer">
          This small app is just for fun and learning of Websockets. No data is being saved, but nothing is secured for now as well.
        </footer>
      </article>
    )
  }
}

export default Register