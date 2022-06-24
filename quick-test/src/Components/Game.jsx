import React, { useRef, useEffect } from 'react'
import '../Styles/Game.css'
import Timer from './Timer'
import Text from './Text'
import InputTest from './InputTest'

function Game(props) {
  const gameRef = useRef(null)

  useEffect(() => {
    props.setgameObj(gameRef)
  })

  return (
    <div ref={gameRef} className='game_container'>
      <div className='timeTextArea'>
        <Timer />
        <Text />
      </div>
      <InputTest />
    </div>
  )
}

export default Game