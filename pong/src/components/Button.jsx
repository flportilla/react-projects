import React from 'react'
import '../styles/Button.css'

function Button({ fade }) {

  function handleClicks() {
    fade();
  }

  return (
    <button onClick={handleClicks} className="btn">Start</button>
  )
}

export default Button