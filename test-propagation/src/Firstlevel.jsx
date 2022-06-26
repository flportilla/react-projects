import React, { useState } from 'react'
import Secondlevel from './Secondlevel'

function Firstlevel(props) {

  function handleClicks() {

    console.log(props.canvasRef)
    // draw(contextRef);
  }
  // function draw(ctx) {

  //   ctx.clearRect(0, 0, 500, 300)
  //   ctx.fillStyle = 'red'
  //   ctx.fillRect(0, 0, 500, 300)
  // }
  return (
    <div

      style={{
        backgroundColor: 'red',
        width: '600px',
        height: '400px'
      }}
      onClick={handleClicks}
    ><Secondlevel setCanvasRef={props.setCanvasRef} /></div>
  )
}

export default Firstlevel