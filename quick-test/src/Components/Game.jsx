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
        <Timer timer={props.timer}

        />
        <Text text={props.text} />
      </div>
      <InputTest
        settextareaVal={props.settextareaVal}
        textareaVal={props.textareaVal}
        settimer={props.settimer}
        timer={props.timer}
        text={props.text}
      />
    </div>
  )
}

export default Game