import React from 'react'
import '../styles/Button.css'
import GameOver from './GameOver'

function Button({ fade, context, canvas, setScore, score, mouseY }) {

  const getContext = () => context()
  const getCanvas = () => canvas()
  const getInitialX = () => getCanvas().width / 2
  const getInitialY = () => Math.floor(Math.random() * (getCanvas().height - 25))

  //Speed
  let dx = 1;
  let dy = -1;

  const ballRadius = 15;
  let intervalId;
  const paddles = {
    height: 76,
    width: 10,
  }

  function drawBall(xPos, yPos) {

    //clean canvas to refresh ball position
    getContext().clearRect(0, 0, getCanvas().width, getCanvas().height);

    //draw the ball
    getContext().beginPath();
    getContext().arc(xPos, yPos, ballRadius, 0, 2 * Math.PI);
    getContext().fillStyle = 'red';
    getContext().fill();
    getContext().stroke();

  }

  function drawPaddle(mouseYMov) {

    //draw the paddles
    getContext().beginPath();
    getContext().rect(0, mouseYMov, paddles.width, paddles.height);
    getContext().fillStyle = "#0095DD";
    getContext().fill();
    getContext().closePath();

    getContext().beginPath();
    getContext().rect((getCanvas().width - paddles.width), mouseYMov, paddles.width, paddles.height);
    getContext().fillStyle = "#0095DD";
    getContext().fill();
    getContext().closePath();
  }

  function handleClicks() {

    //Hide instructions
    fade();

    //get the initial position for the ball and paddles
    let xPos = getInitialX()
    let yPos = getInitialY()
    let mouseYMov = 0

    //set the score to avoid losing 1 point at the begining
    setScore(score++)

    //addEventListener to move the paddles on mousemove
    getCanvas().addEventListener('mousemove', (e) => {
      mouseYMov = e.clientY - getCanvas().getBoundingClientRect().y

    })

    //excecute the function each certain ammount of time to refresh the ball position
    intervalId = setInterval(() => {

      //draw the ball
      drawBall(
        xPos += dx < 0 ? dx - score / 2 : dx + score / 2,
        yPos += dy < 0 ? dy - score / 2 : dy + score / 2)

      //draw the paddles
      drawPaddle(mouseYMov)

      //bounce the ball on bot top and bottom
      if (yPos + dy < ballRadius || yPos + dy > (getCanvas().height - ballRadius)) {
        dy = -dy
      }

      //check if the ball hit a wall on X position
      else if (xPos + dx > (getCanvas().width - ballRadius) || xPos + (dx - ballRadius) < 0) {

        //get the coords for the paddles position and ball impact on Y axis
        const impact = yPos
        const paddleYStart = mouseYMov
        const paddleYEnd = mouseYMov + 76

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
  }

  return (
    <button onClick={handleClicks} className="btn" > Start</button >
  )
}

export default Button