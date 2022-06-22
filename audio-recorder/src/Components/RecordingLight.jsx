import React from 'react'
import '../Styles/RecordingLight.css'

function RecordingLight({ setLight }) {
  return (
    <div className='rec_container'>
      <div className={`rec_light ${setLight}`}></div>
    </div>
  )
}

export default RecordingLight