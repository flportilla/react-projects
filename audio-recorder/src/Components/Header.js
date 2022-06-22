import React from 'react'
import '../Styles/Header.css'

function Header() {
  return (
    <>
      <header className='header'>
        <a href='#'>Audio Recorder</a>
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>Sing in</li>
        </ul>
      </header>
    </>
  )
}

export default Header