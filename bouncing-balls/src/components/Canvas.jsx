import React, { createRef, useEffect } from 'react'

function Canvas({ style }) {

  const canvasRef = createRef()

  let canvas;
  let ctx;

  const initialCoords = {
    x: 0,
    y: 0

  }

  const randomDirection = Math.floor(Math.random() * 10) + 5
  let vx;
  let vy;

  const ballRadius = 5;

  console.log()
  useEffect(() => {

    const getReady = () => {
      canvas = canvasRef.current
      ctx = canvas.getContext('2d')
    }
    getReady()
  })


  function drawBall(x, y) {

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath();
    ctx.arc(initialCoords.x, initialCoords.y, ballRadius, 0, Math.PI * 2, false);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();

    initialCoords.x += vx;
    initialCoords.y += vy;

    if (initialCoords.y + vy < 0 || initialCoords.y + vy > canvas.height) {
      vy = -vy
    }

    if (initialCoords.x + vx > canvas.width || initialCoords.x + vx < 0) {
      vx = -vx;
    }
  }

  function handleLoop(e) {
    let x = initialCoords.x = e.pageX
    let y = initialCoords.y = e.pageY

    vy = Math.floor(Math.random() * 2) === 0 ?
      randomDirection :
      randomDirection * -1;

    vx = Math.floor(Math.random() * 2) === 0 ?
      randomDirection :
      randomDirection * -1;

    setInterval(() => drawBall(x, y), 60)

  }

  return (
    <canvas
      width={style.width}
      height={style.height}

      onClick={handleLoop}

      style={{ backgroundColor: '#101010' }}

      ref={canvasRef}
    >

    </canvas>
  )
}

export default Canvas