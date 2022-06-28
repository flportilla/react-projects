import React, { useRef, useEffect } from 'react'

function Canvas({ balls }) {
  const canvasStyle = {
    height: Number(`${window.innerHeight}`),
    width: Number(`${window.innerWidth}`),
  };

  function drawBigCircle(ctx, circleRadius) {
    ctx.clearRect(0, 0, canvasStyle.width, canvasStyle.height);
    ctx.beginPath();
    ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, circleRadius, 0, 2 * Math.PI)
    ctx.strokeStyle = 'white';
    ctx.stroke();
  }

  function drawBalls(ctx, circleRadius) {
    balls.map((ball, index) => {
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, 10, 0, 2 * Math.PI)
      ctx.fillStyle = ball.color;
      ctx.fill();
      ctx.closePath();

      handleCollision(ctx, ball, circleRadius)
    })
  }

  function handleCollision(ctx, ball, circleRadius) {
    const { width, height } = ctx.canvas
    const { x, y } = ball
    const ballPosition = Math.sqrt(Math.pow(x - width / 2, 2) + Math.pow(y - height / 2, 2))

    if (ballPosition > circleRadius - 10 && ballPosition < circleRadius) {
      console.log(ballPosition)
      debugger
      ctx.shadowColor = 'white';
      ctx.shadowBlur = 10;
    } else {
      ctx.shadowColor = 'black'
      ctx.shadowBlur = 0;
    }


  }

  const canvasRef = useRef(null)

  useEffect(() => {

    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    let circleRadius = 0
    let animationFrameId

    const render = () => {
      circleRadius++
      drawBigCircle(context, circleRadius)
      drawBalls(context, circleRadius)

      if (circleRadius > canvasStyle.width / 2) {
        circleRadius = 0;
      }

      animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [drawBigCircle])

  return (
    <canvas
      ref={canvasRef}
      width={canvasStyle.width}
      height={canvasStyle.height}
      style={{ backgroundColor: '#252525' }}
    />
  )
}

export default Canvas