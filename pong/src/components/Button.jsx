import React from 'react'
import '../styles/Button.css'

function Button({ fade }) {
  return (
    <button onClick={fade} className="btn">Start</button>
  )
}

export default Button