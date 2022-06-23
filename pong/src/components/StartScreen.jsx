import React, { useRef, useEffect } from 'react'
import Button from './Button'
import '../styles/startScreen.css'

function StartScreen({ canvasRef, contextRef, setScore, score, mouseY }) {

  const containerRef = useRef(null)

  let container;
  useEffect(() => { container = containerRef.current }, [])

  const fadeEffect = () => container.classList.add('hidden');
  const hide = () => container.classList.add('remove');

  return (
    <div onTransitionEnd={hide} ref={containerRef} className="start_container">
      <div>
        <h1>PONG</h1>
        <h2>Move your mouse to keep the ball alive with your twin paddles</h2>
        <Button
          setScore={setScore}
          score={score}
          context={contextRef}
          canvas={canvasRef}
          fade={fadeEffect}
          mouseY={mouseY}
        />
      </div>
    </div>

  )
}

export default StartScreen
