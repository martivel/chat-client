import React from 'react'
import Header from '../Header/Header'
import "./Register.scss"

const Register = () => (
  <article className="register">
    <Header title="Register here" />

    <div className="register__body">

    </div>

    <footer className="register__disclaimer">
      This app is just for fun and learning. No data is being saved, but nothing is secured for now as well.
    </footer>
  </article>
)

export default Register