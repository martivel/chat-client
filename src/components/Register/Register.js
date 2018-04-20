import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Header from '../Header/Header'
import "./Register.scss"

class Register extends Component {
  handleChange = (event) => {
    this.setState({
      [`${event.target.name}`]: event.target.value,
    })
  }

  render() {
    return (
      <article className="register">
        <Header title="Choose username" />

        <form
          name="register-form"
          className="register__form form"
          onSubmit={ (event) => this.props.handleSubmit(this.state, event) }
        >
          <label className="form__group">
            <span className="form__title">Username *</span>
            <input
              type="text"
              placeholder="Please fill in your username"
              name="username"
              onChange={ this.handleChange }
              className="form__control"
              required
            />
          </label>

          <button className="form__button">Sign in</button>
        </form>

        <footer className="register__disclaimer">
          <p>This small app is just for fun and learning of Websockets. No data is being saved, but nothing is secured
            for now as well.</p>
        </footer>
      </article>
    )
  }
}

Register.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default Register