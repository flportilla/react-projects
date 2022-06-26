import React from 'react'

function Canvas(props) {

  return (
    <canvas
      width={props.style.width}
      height={props.style.height}
      style={{ backgroundColor: '#252525' }}
    > </canvas>

  )
}

export default Canvas