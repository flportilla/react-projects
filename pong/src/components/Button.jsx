import React from 'react'
import '../styles/Button.css'

function Button({ fade, context, canvas }) {

  const getContext = () => context()
  const getCanvas = () => canvas()

  //Get initial X and Y position for the ball
  let xPos = getCanvas().width / 2
  let yPos = Math.floor(Math.random() * (getCanvas().height - 25))

  let dx = 2;
  let dy = -2

  function drawBall() {


    //draw the ball
    getContext().beginPath();
    getContext().arc(xPos, yPos, 15, 0, 2 * Math.PI);
    getContext().fillStyle = 'red';
    getContext().fill();
    getContext().stroke();
  }

  function draw() {
    getContext().clearRect(0, 0, getCanvas().width, getCanvas().height);
    drawBall();
    xPos += dx;
    yPos += dy;
  }


  function handleClicks() {
    //Hide instructions
    fade();
    drawBall();

  }

  return (
    <button onClick={handleClicks} className="btn">Start</button>
  )
}

export default Button