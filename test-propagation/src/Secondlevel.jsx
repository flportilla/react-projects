import React from 'react'
import Thirdlevel from './Thirdlevel'

function Secondlevel(props) {
  return (
    <div
      style={
        {
          backgroundColor: 'blue',
          width: '500px',
          height: '300px'
        }}
      onClick={props.listeHere}
    >
      <Thirdlevel setCanvasRef={props.setCanvasRef} /></div>
  )
}

export default Secondlevel