import React from 'react'
import { useRef, useEffect } from 'react'

function Thirdlevel(props) {

  return (
    <canvas
      style={
        {
          backgroundColor: 'green',
          width: '400',
          height: '200'
        }}
      onClick={(e) => props.setCanvasRef(e.target)}

    >click me!</canvas>
  )
}

export default Thirdlevel