import React from 'react'
import '../styles/Button.css'

function Button({ fade, context, canvas, setScore, score }) {


  const getContext = () => context()
  const getCanvas = () => canvas()
  const getInitialX = () => getCanvas().width / 2
  const getInitialY = () => Math.floor(Math.random() * (getCanvas().height - 25))

  const paddles = {
    height: 76,
    width: 10,
    paddleX: 0,
  }

  function drawPaddle() {
    getContext().beginPath();
    getContext().rect(0, (getCanvas().height / 2 - paddles.height / 2), paddles.width, paddles.height);
    getContext().fillStyle = "#0095DD";
    getContext().fill();
    getContext().closePath();

    getContext().beginPath();
    getContext().rect((getCanvas().width - paddles.width), (getCanvas().height / 2 - paddles.height / 2), paddles.width, paddles.height);
    getContext().fillStyle = "#0095DD";
    getContext().fill();
    getContext().closePath();
  }

  let dx = 5;
  let dy = -5;
  let intervalId;

  function drawBall(xPos, yPos) {

    if (xPos + dx > getCanvas().width || xPos + dx < 0) {
      alert('you lose')
      clearInterval(intervalId)
    }

    if (yPos + dy > getCanvas().height || yPos + dy < 0) {
      dy = -dy;

    }
    getContext().clearRect(0, 0, getCanvas().width, getCanvas().height);
    //Get initial X and Y position for the ball

    //draw the ball
    getContext().beginPath();
    getContext().arc(xPos, yPos, 15, 0, 2 * Math.PI);
    getContext().fillStyle = 'red';
    getContext().fill();
    getContext().stroke();

  }

  function handleClicks() {
    //Hide instructions
    fade();
    let initialX = getInitialX()
    let initialY = getInitialY()

    intervalId = setInterval(() => {
      drawBall(initialX += dx, initialY += dy)
      drawPaddle()
    }, 20);
  }

  return (
    <button onClick={handleClicks} className="btn" > Start</button >
  )
}

export default Button