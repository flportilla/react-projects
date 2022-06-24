import React, { useRef, useEffect } from 'react'
import './Game.css'

function Game(props) {
  const gameRef = useRef(null)

  useEffect(() => {
    props.setgameObj(gameRef)
  })

  return (
    <div ref={gameRef} className='game_container'>
      <div className='timeTexArea'>
        timer
        Text
      </div>
      input
    </div>
  )
}

export default Game