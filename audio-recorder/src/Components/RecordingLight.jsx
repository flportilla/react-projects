import React from 'react'
import '../Styles/RecordingLight.css'

function RecordingLight({ className }) {
  return (
    <div className='rec_container'>
      <div className={`rec_light ${className}`}></div>
    </div>
  )
}

export default RecordingLight