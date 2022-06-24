import React, { useRef, useEffect } from 'react'
import './Instructions.css'

function Instructions(props) {

  const fade = () => props.instructionsRef.current.classList.add('fade')

  return (
    <>
      <div className="instructions">
        <h1>Typing Test</h1>
        <h2>How many words per minute you can type?</h2>
        <p>Hit start to get your test passage of text and begin typing. You'll have 60 seconds to type as much of the passage as you can. The timer will start when you begin typing. Good luck!</p>
        <button onClick={fade} className="btn">Start</button>
      </div>
    </>
  )
}

export default Instructions