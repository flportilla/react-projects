import React, { useRef, useEffect } from 'react'
import Button from './Button'
import '../styles/startScreen.css'

function StartScreen() {

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
        <Button fade={fadeEffect} />
      </div>
    </div>

  )
}

export default StartScreen
