import React from 'react'
import '../styles/Canvas.css'

function Score({ score }) {
  return (
    <div className='score'>Score: {`${score}`}</div>
  )
}

export default Score