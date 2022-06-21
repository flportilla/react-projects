import React, { createRef, useEffect } from 'react'

function Canvas({ style }) {

  //Create canvas and select the element 'canvas' on the DOM
  const canvasRef = createRef()
  let canvas;
  let ctx;
  useEffect(() => {

    const getReady = () => {
      canvas = canvasRef.current
      ctx = canvas.getContext('2d')
    }
    getReady()
  })

  //create a class Ball to further use
  class Ball {
    constructor(xPos, yPos) {

      const randomDirection = Math.floor(Math.random() * 10 + 5)

      this.xPos = xPos;
      this.yPos = yPos;
      this.radius = 5;
      this.color = 'yellow';
      this.speed = 1

      this.dx = Math.floor(Math.random() * 2) === 0 ?
        randomDirection :
        randomDirection * -1;

      this.dy = Math.floor(Math.random() * 2) === 0 ?
        randomDirection :
        randomDirection * -1;

    }
    draw(context) {
      context.beginPath();
      context.arc(this.xPos, this.yPos, this.radius, 0, Math.PI * 2, false);
      context.fillStyle = this.color;
      context.fill();
      context.stroke();

    }

    move(context) {

      //when the ball reaches the top or bottom, change the direction to recreate the rebound effect
      if (this.yPos + this.dy < 0 || this.yPos + this.dy > canvas.height) {
        this.dy = -this.dy
      }

      //when the ball reaches the left or right, change the direction to recreate the rebound effect
      if (this.xPos + this.dx > canvas.width || this.xPos + this.dx < 0) {
        this.dx = -this.dx;
      }
      //draw the ball adding the new position
      this.draw(context)
      this.xPos += this.dx
      this.yPos += this.dy
    }
  }

  //Array to save the new objects
  const balls = []

  function handleClick(e) {

    //update X and Y positons to the click event
    const x = e.clientX;
    const y = e.clientY;

    //update x and y to move the second ball slightly to a different location
    const randomX = Math.floor(Math.random() * 10) + x
    const randomY = Math.floor(Math.random() * 10) + y

    const ball1 = new Ball(x, y)
    const ball2 = new Ball(randomX, randomY)

    ball1.draw(ctx)
    ball2.draw(ctx)

    balls.push(ball1)
    balls.push(ball2)

  }

  //move the balls randombly through the canvas
  function updatePosition() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    balls.forEach(ball => ball.move(ctx))
  };

  setInterval(updatePosition, 30)

  return (
    <canvas
      width={style.width}
      height={style.height}
      onClick={handleClick}
      style={{ backgroundColor: '#101010' }}
      ref={canvasRef}
    >
    </canvas>
  )
}

export default Canvas