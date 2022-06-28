import React, { useRef, useEffect } from 'react'
import '../styles/Button.css'
import GameOver from './GameOver'


const paddles = {
  height: 76,
  width: 10,
}

function Game({ score, setScore }) {

  const canvasRef = useRef(null)

  // Constants
  let dx = 1;
  let dy = -1;
  const ballRadius = 15;

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) return

    const context = canvas.getContext('2d')
    const { width, height } = context.canvas
    let xPos = width / 2
    let yPos = Math.floor(Math.random() * (height - 25))

    drawBall(context, xPos, yPos)
    drawPaddle(context, yPos)

    let mouseYMov = 0

    //set the score to avoid losing 1 point at the begining
    // setScore(score++)

    //addEventListener to move the paddles on mousemove
    canvas.addEventListener('mousemove', (e) => {
      mouseYMov = e.clientY - canvas.getBoundingClientRect().y

    })

    //excecute the function each certain ammount of time to refresh the ball position
    let intervalId = setInterval(() => {

      //draw the ball
      drawBall(
        context,
        xPos += dx < 0 ? dx - score / 2 : dx + score / 2,
        yPos += dy < 0 ? dy - score / 2 : dy + score / 2
      )

      //draw the paddles
      drawPaddle(context, mouseYMov)

      //bounce the ball on bot top and bottom
      if (yPos + dy < ballRadius || yPos + dy > (height - ballRadius)) {
        dy = -dy
      }

      //check if the ball hit a wall on X position
      else if (xPos + dx > (width - ballRadius) || xPos + (dx - ballRadius) < 0) {

        //get the coords for the paddles position and ball impact on Y axis
        const impact = yPos
        const paddleYStart = mouseYMov
        const paddleYEnd = mouseYMov + paddles.height

        //if the ball matches with the paddle position, plus one point and bounce
        if (impact > paddleYStart && impact < paddleYEnd) {
          setScore(score++)
          dx = -dx
        }

        //if you miss, game over
        else {
          clearInterval(intervalId)
          alert('Game Over, try again?')
          setTimeout(() => {
            window.location.reload();
          }, 500)
        }
      }
    }, 20);

    return () => clearInterval(intervalId)
  }, [])


  //Speed
  function drawBall(context, xPos, yPos) {

    const { width, height } = context.canvas
    //clean canvas to refresh ball position
    context.clearRect(0, 0, width, height);

    //draw the ball
    context.beginPath();
    context.arc(xPos, yPos, ballRadius, 0, 2 * Math.PI);
    context.fillStyle = 'red';
    context.fill();
    context.stroke();
  }

  function drawPaddle(context, mouseYMov) {
    const { width } = context.canvas
    //draw the paddles
    context.beginPath();
    context.rect(0, mouseYMov, paddles.width, paddles.height);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();

    context.beginPath();
    context.rect((width - paddles.width), mouseYMov, paddles.width, paddles.height);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
  }

  return (
    <div className="container">
      <canvas
        height='500'
        width='600'
        style={{ border: '1px solid #7a7c8f' }}
        ref={canvasRef}
      />
    </div>
  )
}

export default Game