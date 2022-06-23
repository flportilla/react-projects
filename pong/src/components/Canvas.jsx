import React from 'react'
import '../styles/Canvas.css'
import Score from './Score'

function Canvas() {

  return (
    <div className="container">
      <canvas
        height='500'
        width='600'
        style={{ border: '1px solid #7a7c8f' }}
      >
      </canvas>
      <Score />
    </div>
  )
}

export default Canvas