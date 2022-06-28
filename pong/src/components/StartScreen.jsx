import React, { useRef, useEffect } from 'react'
import '../styles/startScreen.css'

function StartScreen({ onStart }) {
  return (
    <div className="start_container">
      <div>
        <h1>PONG</h1>
        <h2>Move your mouse to keep the ball alive with your twin paddles</h2>
        <button className="btn" onClick={onStart}>Start</button >
      </div>
    </div >

  )
}

export default StartScreen
