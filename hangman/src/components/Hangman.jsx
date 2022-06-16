import React from 'react'
import '../styles/Hangman.css'
function Hangman() {
  return (
    <>
      <div className='gallow'>
        <div className="man_container">
          <div className="head"></div>
          <div className="torso"></div>
          <div className="left_arm"></div>
          <div className="right_arm"></div>
          <div className="left_leg"></div>
          <div className="right_leg"></div>
        </div>
      </div>
    </>
  )
}

export default Hangman