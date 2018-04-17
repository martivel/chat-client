import React from 'react'
import "./Header.scss"

const Header = ({ title }) => (
  <header className="chat__header">
    <h1 className="chat__title">{ title }</h1>
  </header>
)

export default Header