import React from 'react'

function Canvas({ style }) {


  function drawSquare(e) {

    const canvas = e.target
    const ctx = canvas.getContext('2d')

    const x = e.pageX - canvas.offsetLeft
    const y = e.pageY - canvas.offsetTop


    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2, false);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();

  }

  return (
    <canvas
      width={style.width}
      height={style.height}
      onClick={drawSquare}
      style={{ backgroundColor: '#000' }}
    >

    </canvas>
  )
}

export default Canvas