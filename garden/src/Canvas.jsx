import React, { useRef, useEffect } from 'react'

function Canvas(props) {
  let isTouching = false;

  const canvasStyle = {
    height: Number(`${window.innerHeight}`),
    width: Number(`${window.innerWidth}`),
  };

  function drawBigCircle(ctx, frameCount) {
    const ballsCopy = props.balls.slice();


    ctx.clearRect(0, 0, canvasStyle.width, canvasStyle.height);
    ctx.beginPath();
    ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, frameCount, 0, 2 * Math.PI)
    ctx.strokeStyle = 'white';
    ctx.stroke();

    ballsCopy.map((ball, index) => {
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, 10, 0, 2 * Math.PI)
      ctx.fillStyle = ball.color;
      ctx.fill();
      const ballPosition = Math.sqrt(Math.pow(ball.x - ctx.canvas.width / 2, 2) + Math.pow(ball.y - ctx.canvas.height / 2, 2))

      if (ballPosition > frameCount - 10 && ballPosition < frameCount) {
        isTouching = true;
      }
      else {
        isTouching = false;
      }

      handleCollision(isTouching, ctx, ballPosition)
    })

  }

  function handleCollision(flag, ctx, ballPosition) {
    if (flag) {
      ctx.shadowColor = 'white';
      ctx.shadowBlur = 10;
    }
    else {
      ctx.shadowColor = 'black';
      ctx.shadowBlur = 0;
    }

  }

  const canvasRef = useRef(null)

  useEffect(() => {

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId

    const render = () => {
      frameCount++
      drawBigCircle(context, frameCount)
      if (frameCount > canvasStyle.width / 2) {
        frameCount = 0;
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
    > </canvas>

  )
}

export default Canvas