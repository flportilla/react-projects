import React, { useRef, useEffect } from 'react'
import './Timer.css'

function Timer(props) {
  const timerRef = useRef(null)

  useEffect(() => {
    props.setTimerObj(timerRef)
  })

  return (
    <div ref={timerRef} className='game_container'>
      Timer
    </div>
  )
}

export default Timer