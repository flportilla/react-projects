import React from 'react'
import '../styles/Header.css'

function Header() {
  return (
    <header className='header' id='header'>
      <h1>Hangman</h1>
      <ul>
        <li>Home</li>
        <li>Blog</li>
        <li>Sign in</li>
      </ul>
    </header>
  )
}

export default Header